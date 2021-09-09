import { observer } from 'mobx-react-lite'
import user from '../models/store/user'
import { withAuth } from './base/hocs/withAuth'
import defaultAva from './../assets/svg/default-avatar.svg'
export const Settings = observer(
    withAuth(() => {
        // TODO - fill component
        return (
            <div className='settings'>
                <img className='ava' src={defaultAva} alt='' />
                <div className='description'>
                    <div className='name'>{user.current.fullName}</div>
                    <div className='user-name'>{user.current.firstName}</div>
                </div>
            </div>
        )
    })
)
