import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import locations from '../../models/store/locations'
import { ArrowIcon } from '../../common/icons/ArrowIcon'
import { NoImageIcon } from '../../common/icons/NoImageIcon'
import { Loader } from '../../common/Loader'
import { CharacterItem } from '../Characters/CharacterItem'
import { PointIcon } from '../../common/icons/PointIcon'

export const SelectedLocation = observer(() => {
    const id = useParams<{ id: string }>().id
    useAsyncEffect(async () => {
        await locations.getById(id)
    }, [id])
    const loc = locations.selected
    return locations.selected.id === id ? (
        <div className='selected-location'>
            {loc.imageName ? (
                <img className='ava' src={loc.imageName} alt='' />
            ) : (
                <NoImageIcon />
            )}
            <div className='name'>{loc.name || '???'}</div>
            <div className='type-location'>
                {loc.type || '???'} <PointIcon />{' '}
            </div>
            <div className='location'>{loc.measurements || '???'}</div>
            <div className='about'>{loc.about || '???'}</div>
            <h2>Персонажи</h2>
            {loc.placeOfBirthCharacters.length ? (
                <div className='characters'>
                    {loc.placeOfBirthCharacters.map((ch) => (
                        <Link to={`/characters/${ch.id}`} key={ch.id}>
                            <div className='character-item'>
                                <CharacterItem key={ch.id}>{ch}</CharacterItem>
                                <ArrowIcon />
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <h2>Нет персонажей</h2>
            )}
        </div>
    ) : (
        <Loader />
    )
})
