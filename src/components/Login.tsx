import { Link, Redirect } from 'react-router-dom'
import title from './../assets/svg/title.svg'
import un from './../assets/svg/userName.svg'
import passwordIcon from './../assets/svg/password.svg'
// import eye from './../assets/svg/eye.svg'
import { useInput } from '../common/hooks/useInput'
import user from '../models/store/user'
import { observer } from 'mobx-react-lite'
import { Modal } from './Modal'
export const Login = observer(() => {
    const userName = useInput()
    const password = useInput()
    return !user.auth ? (
        <div className='login'>
            <img className='title' src={title} alt='' />
            <div className='signin'>
                <div className='name'>
                    <p>Логин</p>
                    <img src={un} alt='' />
                    <input {...userName} placeholder='Логин' />
                </div>
                <div className='password'>
                    <p>Пароль</p>
                    <img src={passwordIcon} alt='' />
                    <input {...password} placeholder='Пароль' type='password' />
                    {/* <img className='eye' src={eye} alt='' /> */}
                </div>
                <button
                    onClick={async () => {
                        await user.login({
                            userName: userName.value,
                            password: password.value,
                        })
                    }}
                >
                    Войти
                </button>
                {/* {user.error && <div className='error'>{user.error}</div>} */}
                <Modal
                    visible={!!user.error}
                    onClose={() => (user.error = '')}
                    content={user.error}
                    title='Ошибка'
                />
                <p className='question'>
                    У вас еще нет аккаунта? <Link to='/register'>Создать</Link>
                </p>
            </div>
        </div>
    ) : (
        <Redirect to='/settings' />
    )
})
