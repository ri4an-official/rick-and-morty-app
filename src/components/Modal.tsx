export const Modal = (props: {
    visible: boolean
    onClose: () => void
    title: string
    content: string
}) =>
    props.visible ? (
        <div className='modal'>
            <div className='dialog' onClick={(e) => e.stopPropagation()}>
                <div className='header'>
                    <div className='title'>{props.title}</div>
                </div>
                <div className='body'>
                    <div className='content'>{props.content}</div>
                    <button onClick={props.onClose} className='btn-close'>
                        OK
                    </button>
                </div>
            </div>
        </div>
    ) : null
