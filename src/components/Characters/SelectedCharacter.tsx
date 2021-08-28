import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { GenderCharacter, StatusCharacter } from './CharacterItem'
import { Loader } from '../base/Loader'
import { EpisodeItem } from '../Episodes/EpisodeItem'
export const SelectedCharacter = observer(() => {
    const id = useParams<{ id: string }>().id
    useAsyncEffect(async () => {
        await characters.getById(id)
    }, [id])
    const sch = characters.selected
    return characters.selected.id === id ? (
        <div className='selected-character'>
            <div className='center'>
                <img className='bg-image' src={sch.imageName} alt='bg' />
                <img className='ava' src={sch.imageName} alt='selected-character' />
                <div className='name'>{sch.fullName}</div>
                <StatusCharacter>{sch.status}</StatusCharacter>
            </div>

            <p className='about'>{sch.about}</p>
            <div>
                <div>
                    Пол: <GenderCharacter>{sch.gender}</GenderCharacter>
                </div>
                <div>Раса: {sch.race}</div>
                <Link to={`/locations/${sch.placeOfBirthId}`}>
                    <div>Место рождения: {sch.placeOfBirth?.name}</div>
                </Link>
                <Link to={`/locations/${sch.placeOfBirthId}`}>
                    <div>Место нахождения: {sch.location?.name}</div>
                </Link>
            </div>
            <hr />
            <div>
                <h2>Эпизоды</h2>
                <Link to={'/episodes'}>Все эпизоды</Link>
                <div className='episodes'>
                    {sch.episodes?.map((e) => (
                        <Link to={`/episodes/${e.id}`}>
                            <div className='episode-item' key={e.id}>
                                <EpisodeItem>{e}</EpisodeItem>
                                <span></span>
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
