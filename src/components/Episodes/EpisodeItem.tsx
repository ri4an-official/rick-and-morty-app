import { Episode } from '../../models/types/Episode'

export const EpisodeItem = ({ children }: { children: Episode }) => (
    <div className='episode-item'>
        <img src={children.imageName} alt='ava-episode' />
        <div className='about-episode'>
            <div className='series'>СЕРИЯ {children.series}</div>
            <div className='name'>{children.name}</div>
            <div className='premiere'>{children.premiere}</div>
        </div>
    </div>
)
