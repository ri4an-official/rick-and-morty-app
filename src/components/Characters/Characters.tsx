import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { Loader } from '../base/Loader'
import { CharacterItem } from './CharacterItem'

export const Characters = observer(() => {
    useAsyncEffect(async () => {
        await characters.getAll()
    }, [characters.list.length])
    return characters.list.length ? (
        <div className='characters'>
            {characters.list.map((ch) => (
                <Link to={`/characters/${ch.id}`}>
                    <CharacterItem>{ch}</CharacterItem>
                </Link>
            ))}
        </div>
    ) : (
        <Loader />
    )
})
