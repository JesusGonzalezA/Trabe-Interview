import { cloneElement, FunctionComponent, useRef } from 'react'
import { IModalProps } from './IModalProps'
import DefaultCloseIcon from './DefaultCloseIcon'
import './Modal.css'

const Modal : FunctionComponent<IModalProps> 
= ({
    showModal,
    onClose,
    CloseIcon = <DefaultCloseIcon />,
    title,
    footer,
    rounded,
    children
}) => {
    const modalRef = useRef<HTMLDivElement>(null)

    const handleOnClose = () => {
        onClose()
    }

    const handleOnClick = (e : any) => {
        if (modalRef.current === e.target)
            handleOnClose()
    }

    return (
        <>
        {
            (showModal) 
            ? (
                <div className='modal__background' ref={modalRef} onClick={handleOnClick} id='modal__background'>
                    <div className={`modal__container ${rounded? 'modal__rounded' : ''}`}>
                        <div className='modal__header'>
                            <p>{ title }</p>
                            {
                                cloneElement(CloseIcon, {
                                    onClick: () => {
                                        CloseIcon.props.onClick && CloseIcon.props.onClick()
                                        handleOnClose()
                                    },
                                    className: 'modal__header__close',
                                    id: 'modal__header__close'
                                })
                            }
                        </div>
                        <hr/>
                        <div className='modal__body'>
                            {
                                children
                            }
                        </div>
                        <div className='modal__footer'>
                            { footer }
                        </div>
                    </div>
                </div>
            ) 
            : null
        }
        </>
    )
}

export default Modal