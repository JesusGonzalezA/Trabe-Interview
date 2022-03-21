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
                <div id='modal__background' ref={modalRef} onClick={handleOnClick}>
                    <div id={`modal__container ${rounded? 'modal__rounded' : ''}`}>
                        <div id='modal__header'>
                            <p>{ title }</p>
                            {
                                cloneElement(CloseIcon, {
                                    onClick: () => {
                                        CloseIcon.props.onClick && CloseIcon.props.onClick()
                                        handleOnClose()
                                    },
                                    id: 'modal__header__close' 
                                })
                            }
                        </div>
                        <hr/>
                        <div id='modal__body'>
                            {
                                children
                            }
                        </div>
                        <div id='modal__footer'>
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