import closeRed from './../assets/svg/close-red.svg'
export const Media = ({ src }: { src: string }) => (
    <div>
        <img src={src} className='photo' alt='my media' />
        <img className='btn-close' src={closeRed} alt='close-btn' />
    </div>
)
