import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import useAsyncEffect from 'use-async-effect'
import locations from '../../models/store/locations'
import { Loader } from '../base/Loader'
import { LocationItem } from './LocationItem'

export const Locations = observer(() => {
    useAsyncEffect(async () => {
        await locations.getAll()
    }, [locations.list.length])
    return locations.list.length ? (
        <div>
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
