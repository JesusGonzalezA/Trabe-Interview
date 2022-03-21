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
                <div className='modal__background' ref={modalRef} onClick={handleOnClick}>
                    <div className={`modal__container ${rounded? 'modal__rounded' : ''}`}>
                        <div className='modal__header'>
                            <p>{ title }</p>
                            <button onClick={handleOnClose} className='modal__header__close'>
                                {
                                    cloneElement(CloseIcon, {
                                        onClick: () => {
                                            CloseIcon.props.onClick && CloseIcon.props.onClick()
                                            handleOnClose()
                                        }
                                    })
                                }
                            </button>
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