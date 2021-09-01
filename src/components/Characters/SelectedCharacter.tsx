import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { GenderCharacter, StatusCharacter } from './CharacterItem'
import { Loader } from '../base/Loader'
import { EpisodeItem } from '../Episodes/EpisodeItem'
import { ArrowIcon } from '../base/icons/ArrowIcon'
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
            <div className='description'>
                <div>
                    Пол <br /> <GenderCharacter>{sch.gender}</GenderCharacter>
                </div>
                <div>
                    Раса <br /> <div className='race'>{sch.race}</div>
                </div>
                <div>
                    Место рождения <br />
                    <Link to={`/locations/${sch.placeOfBirthId}`}>
                        <div className='placeOfBirth'>{sch.placeOfBirth?.name}</div>
                        <ArrowIcon />
                    </Link>
                </div>
                <div>
                    Место нахождения <br />
                    <Link to={`/locations/${sch.locationId}`}>
                        <div className='location'>{sch.location?.name}</div>
                        <ArrowIcon />
                    </Link>
                </div>
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
