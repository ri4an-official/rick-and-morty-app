import { FC } from 'react'

export const Modal = (props: {
    visible: boolean
    onClose: () => void
    title: string
    Content: FC<{ onClose: () => void }>
}) =>
    props.visible ? (
        <div className='modal'>
            <div className='dialog' onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    <div className='title-modal'>{props.title}</div>
                </div>
                <div className='body'>
                    <props.Content onClose={props.onClose} />
                </div>
            </div>
        </div>
    ) : null
