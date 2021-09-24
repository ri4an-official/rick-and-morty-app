import { observer } from 'mobx-react-lite'
import user from '../models/store/user'
import defaultAva from './../assets/svg/default-avatar.svg'
import pallete from './../assets/svg/color-pallete.svg'
import { ArrowIcon } from '../common/icons/ArrowIcon'
import { version } from '../common/version/index.json'
import { useState } from 'react'
import { Modal } from './Modal'
// TODO- add theme
export const Settings = observer(() => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState('включена')
    const handleSelected = (e: any) => {
        setSelectedRadio(e.target.value)
        document.documentElement.classList.remove(`theme-${user.theme}`)
        switch (selectedRadio) {
            case 'включена':
                user.theme = 'light'
                break
            case 'выключена':
                user.theme = 'dark'
                break
            default:
                user.theme = 'light'
        }
        document.documentElement.classList.add(`theme-${user.theme}`)
    }
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
                            <div className='radio-btns'>
                                <label>
                                    <input
                                        type='radio'
                                        value='включена'
                                        checked={selectedRadio === 'включена'}
                                        onChange={handleSelected}
                                    />
                                    Включена
                                </label>
                                <label>
                                    {' '}
                                    <input
                                        type='radio'
                                        value='выключена'
                                        checked={selectedRadio === 'выключена'}
                                        onChange={handleSelected}
                                    />
                                    Выключена
                                </label>
                                <label>
                                    <input
                                        type='radio'
                                        value='настройки'
                                        checked={selectedRadio === 'настройки'}
                                        onChange={handleSelected}
                                    />
                                    Следовать настройкам системы
                                </label>
                                <label>
                                    <input
                                        type='radio'
                                        value='энергосбережение'
                                        checked={selectedRadio === 'энергосбережение'}
                                        onChange={handleSelected}
                                    />
                                    В режиме энергосбережения
                                </label>
                            </div>
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
