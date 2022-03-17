import { Dispatch, SetStateAction, ComponentType } from 'react'

export interface IModalProps {
    showModal?: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>,
    CloseIcon?: ComponentType,
    title: string,
    Body?: ComponentType,
    footer: string,
    rounded?: boolean
}