import { Friend } from '../models/types/Friend'
import close from './../assets/svg/close.svg'
export const FriendItem = ({ nickname, job, avatar }: Friend) => (
    <div className='friend'>
        <img className='avatar' src={avatar} alt='ava' />
        <div>
            <div className='nickname'>{nickname}</div>
            <div className='hobby'>{job}</div>
        </div>
        <img className='close' src={close} alt='close' />
    </div>
)
