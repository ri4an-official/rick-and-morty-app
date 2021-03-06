import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import episodes from '../../models/store/episodes'
import { Search } from '../../common/Search'
import { EpisodeItem } from './EpisodeItem'
import { useState } from 'react'
import { EpisodesEmptyIcon } from '../../common/icons/EpisodesEmptyIcon'

export const Episodes = observer(() => {
    const [notFound, setNotFound] = useState(false)
    useAsyncEffect(async () => {
        await episodes.getAll()
        await episodes.getTotal()
    }, [])
    return (
        <div>
            <Search
                onSubmit={async (query) => {
                    await episodes.search({ name: query })
                    setNotFound(!episodes.list.length)
                }}
                placeholder='Найти эпизод '
            />
            <div className='count'>ВСЕГО ЭПИЗОДОВ: {episodes.total}</div>
            {!notFound ? (
                <>
                    <div className='seasons'>
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div
                                onClick={async () => await episodes.getAll(1, 20, s)}
                                className='season'
                                tabIndex={s}
                            >
                                {s}
                            </div>
                        ))}
                    </div>
                    <div className='episodes'>
                        {episodes.list.map((e) => (
                            <Link to={`/episodes/${e.id}`}>
                                <EpisodeItem key={e.id}>{e}</EpisodeItem>
                            </Link>
                        ))}
                    </div>
                </>
            ) : (
                <div className='episodes-not-found'>
                    <EpisodesEmptyIcon />
                    <p>Эпизода с таким названием нет</p>
                </div>
            )}
        </div>
    )
})
