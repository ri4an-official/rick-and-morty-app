import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { CharacterItem } from './CharacterItem'
import { Search } from '../base/Search'
export const Characters = observer(() => {
    useAsyncEffect(async () => {
        await characters.getAll()
        await characters.getTotal()
    }, [characters])

    return (
        <>
            <Search
                onSubmit={async (query) =>
                    await characters.search({ name: query, status: 0, gender: 0 })
                }
                placeholder='Найти персонажа'
            />
            {/* FIXME - fix total */}
            <div className='count'>ВСЕГО ПЕРСОНАЖЕЙ: {characters.total}</div>
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
