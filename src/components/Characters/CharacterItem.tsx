import { Character, Gender, Status } from '../../models/types/Character'

export const CharacterItem = ({ children }: { children: Character }) => (
    <div className='character-item'>
        <img src={children.imageName} alt='' className='ava' />
        <div className='about-character'>
            <StatusCharacter>{children.status}</StatusCharacter>
            <h2 className='name'>{children.fullName}</h2>
            <span className='race'>{children.race},</span>
            <GenderCharacter>{children.gender}</GenderCharacter>
        </div>
    </div>
)
export const StatusCharacter = ({ children }: { children: Status }) =>
    (children === 0 && <div className='alive'>ЖИВОЙ</div>) ||
    (children === 1 && <div className='dead'>МЕРТВЫЙ</div>) || (
        <div className='uknown'>НЕИЗВЕСТНО</div>
    )
export const GenderCharacter = ({ children }: { children: Gender }) => (
    <span className='gender'>
        {(children === 0 && 'Мужской') || (children === 1 && 'Женский') || 'Неизвестно'}
    </span>
)
