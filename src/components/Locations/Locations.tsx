import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import locations from '../../models/store/locations'
import { Loader } from '../base/Loader'
import { Search } from '../base/Search'
import { LocationItem } from './LocationItem'

export const Locations = observer(() => {
    useAsyncEffect(async () => {
        await locations.getAll()
        await locations.getTotal()
    }, [locations])
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
            {/* FIXME - fix total */}
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
