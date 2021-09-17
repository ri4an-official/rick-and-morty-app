import { observer } from 'mobx-react-lite'
import user from '../models/store/user'
import { withAuth } from '../common/hocs/withAuth'
import defaultAva from './../assets/svg/default-avatar.svg'
import pallete from './../assets/svg/color-pallete.svg'
import { ArrowIcon } from '../common/icons/ArrowIcon'
import { version } from '../common/version/index.json'
import { useState } from 'react'
import { Modal } from './Modal'
// TODO- add theme
export const Settings = observer(
    withAuth(() => {
        const [isVisible, setIsVisible] = useState(false)
        return (
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
                <div className='theme' onClick={() => setIsVisible(true)}>
                    <Modal
                        onClose={() => setIsVisible(false)}
                        visible={isVisible}
                        title='Темная тема'
                        Content={({ onClose }) => (
                            <>
                                <select name='' id=''>
                                    <option value='Выключена'></option>
                                    <option value='Включена'></option>
                                    <option value='Следовать настройкам системы'></option>
                                    <option value='В режиме энергосбережения'></option>
                                </select>
                                <button className='btn-cancel' onClick={onClose}>
                                    ОТМЕНА
                                </button>
                            </>
                        )}
                    />
                    <img className='pallete' src={pallete} alt='' />
                    <div className='about'>
                        <div className='name'>Темная тема</div>
                        <div className='status'>Включена</div>
                    </div>
                    <ArrowIcon />
                </div>
                <hr />
                <div className='about'>О ПРИЛОЖЕНИИ</div>
                <p className='about-text'>
                    Зигерионцы помещают Джерри и Рика в симуляцию, чтобы узнать секрет
                    изготовления концен-трирован- ной темной материи.
                </p>
                <hr />
                <div className='version'>ВЕРСИЯ ПРИЛОЖЕНИЯ</div>
                <p className='version-value'>Rick & Morty v{version}</p>
            </div>
        )
    })
)
