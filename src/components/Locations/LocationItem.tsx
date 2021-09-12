import { Location } from '../../models/types/Location'
import { NoImageIcon } from '../common/icons/NoImageIcon'
import { PointIcon } from '../common/icons/PointIcon'

export const LocationItem = ({ children }: { children: Location }) => (
    <div className='location-item'>
        {children.imageName ? <img src={children.imageName} alt='' /> : <NoImageIcon />}
        <div className='container'>
            <div className='name'>{children.name || '???'}</div>
            <div className='type-location'>
                {children.type || '???'}
                <PointIcon />
            </div>
            <div className='location'>{children.measurements || '???'}</div>
        </div>
    </div>
)
