import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import episodes from '../../models/store/episodes'
import { ArrowIcon } from '../base/icons/ArrowIcon'
import { Loader } from '../base/Loader'
import { CharacterItem } from '../Characters/CharacterItem'
import video from './../../assets/svg/video-play.svg'
export const SelectedEpisode = observer(() => {
    const id = useParams<{ id: string }>().id
    useAsyncEffect(async () => {
        await episodes.getById(id)
    }, [id])
    const ep = episodes.selected
    return episodes.selected.id === id ? (
        <div className='selected-episode'>
            <div className='video-player center'>
                <img className='bg-image' src={ep.imageName} alt='episode'></img>
                <img className='player' src={video} alt='video' />
            </div>
            <div className='about-episode'>
                <div className='center name'>{ep.name}</div>
                <div className='center series'>{ep.series}</div>
                <div className='plot'>{ep.plot}</div>
                <div className='premiere'>
                    Премьера <div>{new Date(ep.premiere + 'Z').toDateString()}</div>
                </div>
                <hr />
                <h2>Персонажи</h2>
                <div className='characters'>
                    {ep.characters?.map((ch) => (
                        <Link to={`/characters/${ch.id}`} key={ch.id}>
                            <div className='character-item'>
                                <CharacterItem key={ch.id}>{ch}</CharacterItem>
                                <ArrowIcon />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    )
})
