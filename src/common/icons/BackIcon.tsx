import { useHistory } from 'react-router'

export const BackIcon = () => {
    const history = useHistory()
    return (
        <div onClick={() => history.goBack()}>
            <svg
                className='back-icon'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M5 12H19'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
                <path
                    d='M10 7L5 12'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
                <path
                    d='M10 17L5 12'
                    stroke='white'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                />
            </svg>
        </div>
    )
}
