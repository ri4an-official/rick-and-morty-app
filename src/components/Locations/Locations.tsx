import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import locations from '../../models/store/locations'
import { Search } from '../../common/Search'
import { LocationItem } from './LocationItem'
import { useState } from 'react'
import { LocationsEmptyIcon } from '../../common/icons/LocationEmptyIcon'

export const Locations = observer(() => {
    const [notFound, setNotFound] = useState(false)
    useAsyncEffect(async () => {
        await locations.getAll()
        await locations.getTotal()
    }, [])
    return (
        <>
            <Search
                onSubmit={async (query) => {
                    await locations.search({
                        name: query,
                        type: 'Планета',
                        measurements: '',
                    })
                    setNotFound(!locations.list.length)
                }}
                placeholder='Найти локацию'
            />
            <div className='count'>ВСЕГО ЛОКАЦИЙ: {locations.total}</div>
            {!notFound ? (
                <div className='locations'>
                    {locations.list.map((l) => (
                        <Link key={l.id} to={`/locations/${l.id}`}>
                            <LocationItem>{l}</LocationItem>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className='locations-not-found'>
                    <LocationsEmptyIcon />
                    <p>Локации с таким названием не найдено</p>
                </div>
            )}
        </>
    )
})
