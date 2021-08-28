import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import episodes from '../../models/store/episodes'
import { Loader } from '../base/Loader'
import { EpisodeItem } from './EpisodeItem'

export const Episodes = observer(() => {
    useAsyncEffect(async () => {
        await episodes.getAll()
    }, [episodes.list.length])
    return episodes.list.length ? (
        <div className='episodes'>
            {episodes.list.map((e) => (
                <Link to={`/episodes/${e.id}`}>
                    <EpisodeItem key={e.id}>{e}</EpisodeItem>
                </Link>
            ))}
        </div>
    ) : (
        <Loader />
    )
})
