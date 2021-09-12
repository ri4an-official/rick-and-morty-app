import { observer } from 'mobx-react-lite'
import user from '../models/store/user'
import { withAuth } from './base/hocs/withAuth'
import defaultAva from './../assets/svg/default-avatar.svg'
import pallete from './../assets/svg/color-pallete.svg'
import { ArrowIcon } from './base/icons/ArrowIcon'
// TODO- add theme, edit profile
export const Settings = observer(
    withAuth(() => (
        <div className='settings'>
            <div className='profile'>
                <img className='ava' src={defaultAva} alt='' />
                <div className='description'>
                    <div className='name'>{user.current.fullName}</div>
                    <div className='user-name'>{user.current.firstName}</div>
                </div>
            </div>
            <div className='center'>
                <button className='edit'>Редактировать</button>
            </div>
            <hr />
            <div className='pallete-label'>ВНЕШНИЙ ВИД</div>
            <div className='theme'>
                <img className='pallete' src={pallete} alt='' />
                <div className='about'>
                    <div className='name'>Темная тема</div>
                    <div className='status'>Включена</div>
                    <ArrowIcon />
                </div>
            </div>
            <hr />
            <div className='about'>О ПРИЛОЖЕНИИ</div>
            <p className='about-text'>
                Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет
                изготовления концен-трирован- ной темной материи.
            </p>
            <hr />
            <div className='version'>ВЕРСИЯ ПРИЛОЖЕНИЯ</div>
            <p className='version-value'>Rick & Morty v1.0.0</p>
        </div>
    ))
)
