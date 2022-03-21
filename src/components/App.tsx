import { useState } from 'react'
import { Modal } from './modal'
import CustomCloseIcon from './modal/CustomCloseIcon'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpen = () => { setShowModal(true) }
  const handleClose = () => { setShowModal(false) }

  return (
    <>
      <h1>Trabe interview</h1>
      <h2>Exercise 2: Modal</h2>

      <hr />

      <button onClick={handleOpen}>Show modal</button>

      <Modal
        showModal={showModal}
        onClose={handleClose}
        title='Hello Trabe'
        CloseIcon={<CustomCloseIcon />}
        footer='Developed by Jesús González Álvarez'
        rounded
      >
        <p>
        In order to close the modal, you can click outside of it. Also, you can click the button
        on the top right corner or click this button below
        </p>
        <button onClick={handleClose}>Click me!</button>
      </Modal>
    </>
  )
}

export default App
