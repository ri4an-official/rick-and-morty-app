import { Episode } from '../../models/types/Episode'

export const EpisodeItem = ({ children }: { children: Episode }) => (
    <div className='episode-item'>
        <img className='logo' src={children.imageName} alt='ava-episode' />
        <div className='about-episode'>
            <div className='series'>СЕРИЯ {children.series}</div>
            <div className='name-episode'>{children.name}</div>
            <div className='premiere'>
                {new Date(children.premiere + 'Z').toDateString()}
            </div>
        </div>
    </div>
)
