import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import episodes from '../../models/store/episodes'
import { Search } from '../base/Search'
import { EpisodeItem } from './EpisodeItem'

export const Episodes = observer(() => {
    useAsyncEffect(async () => {
        await episodes.getAll()
        await episodes.getTotal()
    }, [])
    return (
        <div>
            <Search
                onSubmit={async (query) => await episodes.search({ name: query })}
                placeholder='Найти эпизод '
            />
            <div className='count'>ВСЕГО ЭПИЗОДОВ: {episodes.total}</div>
            <div className='seasons'>
                {[1, 2, 3, 4, 5].map((s) => (
                    <div
                        onClick={async () => await episodes.getAll(1, 20, s)}
                        className='season'
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
        </div>
    )
})
