import ava from './../assets/images/ava-template.png'
import addViolet from './../assets/svg/add-violet.svg'
export const Avatar = ({ src }: { src?: string }) => (
    <div>
        <img className='avatar' src={src ?? ava} alt='ava' />
        <img
            className='add-violet'
            src={addViolet}
            alt='upload'
            onClick={() => document.getElementById('upload')?.click()}
        />
        <input
            id='upload'
            type='file'
            style={{ display: 'none' }}
            accept='.jpeg'
            className='add-violet'
            src={addViolet}
        />
    </div>
)
