import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import locations from '../../models/store/locations'
import { Loader } from '../base/Loader'
import { Search } from '../base/Search'
import { LocationItem } from './LocationItem'

export const Locations = observer(() => {
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    useAsyncEffect(async () => {
        if (fetching) {
            await locations.getAll(currentPage, 20).finally(() => setFetching(false))
            setCurrentPage((cp) => cp + 1)
        }
        await locations.getTotal()
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
            locations.list.length < locations.total
        )
            setFetching(true)
    }
    return locations.list.length ? (
        <div>
            <Search
                onSubmit={async (query) =>
                    await locations.search({
                        name: query,
                        type: 'Планета',
                        measurements: '',
                    })
                }
                placeholder='Найти локацию'
            />
            <div className='count'>ВСЕГО ЛОКАЦИЙ: {locations.total}</div>
            <div className='locations'>
                {locations.list.map((l) => (
                    <Link key={l.id} to={`/locations/${l.id}`}>
                        <LocationItem>{l}</LocationItem>
                    </Link>
                ))}
            </div>
        </div>
    ) : (
        <Loader />
    )
})
