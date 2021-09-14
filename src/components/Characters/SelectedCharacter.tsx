import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { GenderCharacter, StatusCharacter } from './CharacterItem'
import { Loader } from '../../common/Loader'
import { EpisodeItem } from '../Episodes/EpisodeItem'
import { ArrowIcon } from '../../common/icons/ArrowIcon'
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
                    Пол <br />
                    <div>
                        <GenderCharacter>{sch.gender}</GenderCharacter>
                    </div>
                </div>
                <div>
                    Раса <br /> <div className='race'>{sch.race}</div>
                </div>
                <Link to={`/locations/${sch.placeOfBirthId}`}>
                    Место рождения <br />
                    <div className='placeOfBirth'>
                        {sch.placeOfBirth?.name}
                        <ArrowIcon />
                    </div>
                </Link>
                <Link to={`/locations/${sch.locationId}`}>
                    Место нахождения <br />
                    <div className='location'>
                        {sch.location?.name} <ArrowIcon />
                    </div>
                </Link>
            </div>
            <hr />
            <div>
                <h2>Эпизоды</h2>
                {sch.episodes?.length ? (
                    <div className='episodes'>
                        {sch.episodes?.map((e) => (
                            <Link to={`/episodes/${e.id}`} key={e.id}>
                                <div className='episode-item'>
                                    <EpisodeItem>{e}</EpisodeItem>
                                    <ArrowIcon />
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <h2>Нет эпизодов</h2>
                )}
            </div>
        </div>
    ) : (
        <Loader />
    )
})
