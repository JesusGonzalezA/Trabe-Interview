import { useState } from 'react'
import { Modal } from './modal'

const Body = ({setShowModal} : any) => {
  return (
    <>
      <p>
        In order to close the modal, you can click outside of it. Also, you can click the button
        on the top right corner or click this button below
      </p>
      <button onClick={() => setShowModal(false)}>Click me!</button>
    </>
  )
}

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <h1>Trabe interview</h1>
      <h2>Exercise 2: Modal</h2>

      <hr />

      <button onClick={handleShowModal}>Show modal</button>

      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal}
        title='Hello Trabe'
        Body={() => (<Body setShowModal={setShowModal} />)}
        footer='Developed by Jesús González Álvarez'
        rounded
      />
    </>
  )
}

export default App
