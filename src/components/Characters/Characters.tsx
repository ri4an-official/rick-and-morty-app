import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { CharacterItem } from './CharacterItem'
import { Search } from '../base/Search'
import { useEffect, useState } from 'react'
export const Characters = observer(() => {
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    useAsyncEffect(async () => {
        if (fetching) {
            await characters.getAll(currentPage, 20).finally(() => setFetching(false))
            setCurrentPage((cp) => cp + 1)
        }
        await characters.getTotal()
    }, [fetching])
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [])
    const scrollHandler = (e: any) => {
        if (
            e.target.documentElement.scrollHeight -
                (e.target.documentElement.scrollTop + window.innerHeight) <
                100 &&
            characters.list.length < characters.total
        )
            setFetching(true)
    }

    return (
        <>
            <Search
                onSubmit={async (query) =>
                    await characters.search({ name: query, status: 0, gender: 0 })
                }
                placeholder='Найти персонажа'
            />
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
