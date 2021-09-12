import { observer } from 'mobx-react-lite'
import un from './../assets/svg/userName.svg'
import passwordIcon from './../assets/svg/password.svg'
import { useInput } from './base/hooks/useInput'
import user from '../models/store/user'
import { useHistory } from 'react-router'
export const Register = observer(() => {
    const history = useHistory()
    const firstName = useInput()
    const lastName = useInput()
    const patronymic = useInput()
    const login = useInput()
    const password = useInput()
    return (
        <div className='register'>
            <h1>Создать аккаунт</h1>
            <div className='name'>Имя</div>
            <input {...firstName} placeholder='Имя' />
            <div className='name'>Фамилия</div>
            <input {...lastName} placeholder='Фамилия' />
            <div className='name'>Отчество</div>
            <input {...patronymic} placeholder='Отчество' />
            <hr />
            <div className='signin'>
                <div className='name'>Логин</div>
                <img id='loginIcon' src={un} alt='' />
                <input {...login} id='login' placeholder='Логин' />
                <div className='name'>Пароль</div>
                <img id='passwordIcon' src={passwordIcon} alt='' />
                <input
                    {...password}
                    id='password'
                    placeholder='Пароль'
                    type='password'
                />
                <button
                    onClick={async () => {
                        await user.register({
                            userName: login.value,
                            password: password.value,
                            firstName: firstName.value,
                            lastName: lastName.value,
                            patronymic: patronymic.value,
                        })
                        if (!user.error) history.push('/settings')
                    }}
                >
                    Создать
                </button>
            </div>
        </div>
    )
})
