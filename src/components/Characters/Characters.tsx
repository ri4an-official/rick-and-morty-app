import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import characters from '../../models/store/characters'
import { CharacterItem } from './CharacterItem'
import { Search } from '../../common/Search'
import { useEffect, useState } from 'react'
import { CharactersEmptyIcon } from '../../common/icons/CharactersEmptyIcon'
export const Characters = observer(() => {
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [notFound, setNotFound] = useState(false)
    useAsyncEffect(async () => {
        if (fetching) {
            await characters.getAll(currentPage).finally(() => setFetching(false))
            setCurrentPage(currentPage + 1)
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
                onSubmit={async (query) => {
                    await characters.search({ name: query, status: 0, gender: 0 })
                    setNotFound(!characters.list.length)
                }}
                placeholder='Найти персонажа'
            />
            <div className='count'>ВСЕГО ПЕРСОНАЖЕЙ: {characters.total}</div>
            {!notFound ? (
                <div className='characters'>
                    {characters.list.map((ch, i) => (
                        <Link to={`/characters/${ch.id}`} key={i}>
                            <CharacterItem>{ch}</CharacterItem>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className='characters-not-found'>
                    <CharactersEmptyIcon />
                    <p>Персонаж с таким именем не найден</p>
                </div>
            )}
        </>
    )
})
