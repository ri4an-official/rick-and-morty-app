import { Location } from '../../models/types/Location'

export const LocationItem = ({ children }: { children: Location }) => (
    <div className='location-item'>
        <img src={children.imageName} alt='' />
        <div className='name'>{children.name}</div>
        <div className='type-location'>{children.type} - </div>
        <div className='location'>{children.measurements}</div>
    </div>
)
