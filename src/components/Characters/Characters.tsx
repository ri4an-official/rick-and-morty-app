import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { Loader } from '../base/Loader'
import { CharacterItem } from './CharacterItem'
import filter from './../../assets/svg/filter.svg'
import search from './../../assets/svg/search.svg'
import { useState } from 'react'
export const Characters = observer(() => {
    useAsyncEffect(async () => {
        await characters.getAll()
    }, [])
    const [name, setName] = useState('')

    return (
        <>
            <div className='filter'>
                <img className='seacrh-icon' src={search} alt='search' />
                <input
                    onChange={(e) => setName(e.currentTarget.value)}
                    onKeyPress={async (e) =>
                        e.key === 'Enter' &&
                        (await characters.search({ name, status: 0, gender: 0 }))
                    }
                    placeholder='Найти персонажа'
                />
                <div className='vertical-line' />
                <img className='filter-icon' src={filter} alt='filter' />
            </div>

            <div className='count'>ВСЕГО ПЕРСОНАЖЕЙ: {characters.list.length}</div>
            <div className='characters'>
                {characters.list.map((ch) => (
                    <Link to={`/characters/${ch.id}`}>
                        <CharacterItem>{ch}</CharacterItem>
                    </Link>
                ))}
            </div>
        </>
    )
})
