import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from '../components/modal'
import { IModalProps } from '../components/modal/IModalProps'

const onClose = jest.fn()

const defaultProps : IModalProps = {
    showModal: true,
    onClose: onClose,
    title: '',
    footer: ''
}

describe('Testing modal component', () => {
    test('modal should not be visible when close button is clicked', () => {
        render(<Modal {...defaultProps } />)
        const closeButton = screen.getByTestId('modal__header__close')

        userEvent.click(closeButton)

        expect( onClose ).toHaveBeenCalled()
    })

    test('modal should not be visible when clicking outside', () => {
        render(<Modal {...defaultProps } />)
        const background = screen.getByTestId('modal__background')

        userEvent.click(background)

        expect( onClose ).toHaveBeenCalled()
    })
})