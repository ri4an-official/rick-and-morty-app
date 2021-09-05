import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import episodes from '../../models/store/episodes'
import { Loader } from '../base/Loader'
import { EpisodeItem } from './EpisodeItem'

export const Episodes = observer(() => {
    useAsyncEffect(async () => {
        await episodes.getAll()
    }, [episodes])
    return (
        <div>
            <div className='seasons'>
                {[1, 2, 3, 4, 5].map((s) => (
                    <div
                        onClick={async () => {
                            await episodes.getAll()
                            episodes.filterBySeason(s)
                        }}
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
