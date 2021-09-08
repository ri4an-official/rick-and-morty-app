import { observer } from 'mobx-react-lite'
import { Link, useParams } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import locations from '../../models/store/locations'
import { ArrowIcon } from '../base/icons/ArrowIcon'
import { Loader } from '../base/Loader'
import { CharacterItem } from '../Characters/CharacterItem'

export const SelectedLocation = observer(() => {
    const id = useParams<{ id: string }>().id
    useAsyncEffect(async () => {
        await locations.getById(id)
    }, [id])
    const loc = locations.selected
    return locations.selected.id === id ? (
        <div className='selected-location'>
            <img src={loc.imageName} alt='' />
            <div className='name'>{loc.name}</div>
            <div className='type-location'>{loc.type} - </div>{' '}
            <div className='location'>{loc.measurements}</div>
            <div className='about'>{loc.about}</div>
            <h2>Персонажи</h2>
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
        </div>
    ) : (
        <Loader />
    )
})
