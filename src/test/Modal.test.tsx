import '@testing-library/jest-dom'
import { shallow, mount } from 'enzyme'
import { Modal } from '../components/modal'
import { IModalProps } from '../components/modal/IModalProps'

const setShowModal = jest.fn()
const defaultProps : IModalProps = {
    setShowModal,
    title: '',
    footer: ''
}

describe('Testing modal component', () => {
    test('modal should not be visible when close button is clicked', () => {
        const wrapper = shallow(<Modal showModal={true} {...defaultProps } />)
        const closeButton = wrapper.find('.modal__header__close')

        closeButton.simulate('click')

        expect( setShowModal ).toHaveBeenLastCalledWith(false)
    })

    test('modal should not be visible when clicking outside', () => {
        const wrapper = mount(<Modal showModal={true} {...defaultProps } />)
        const background = wrapper.find('.modal__background')

        background.simulate('click', {
            target: background.getDOMNode()
        })

        expect( setShowModal ).toHaveBeenCalledWith(false)
    })
})