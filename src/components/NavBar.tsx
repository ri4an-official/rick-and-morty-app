import { Link } from 'react-router-dom'
import charactersIcon from './../assets/svg/charactersIcon.svg'
import locationIcon from './../assets/svg/locationIcon.svg'
import episodesIcon from './../assets/svg/episodesIcon.svg'
import settingsIcon from './../assets/svg/settingsIcon.svg'
export const NavBar = () => (
    <div className='nav-bar'>
        <Link to='/characters'>
            <div>
                <img src={charactersIcon} alt='' />
                <div className='header-title'>Персонажи</div>
            </div>
        </Link>
        <Link to='/locations'>
            <div>
                <img src={locationIcon} alt='' />
                <div className='header-title'>Локации</div>
            </div>
        </Link>
        <Link to='/episodes'>
            <div>
                <img src={episodesIcon} alt='' />
                <div className='header-title'>Эпизоды</div>
            </div>
        </Link>
        <Link to='/settings'>
            <div>
                <img src={settingsIcon} alt='' />
                <div className='header-title'>Настройки</div>
            </div>
        </Link>
    </div>
)
