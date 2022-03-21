# Trabe interview

## Instructions

### Execute the application
```bash
npm i
npm start
```

### Execute the test suite
```bash
npm i
npm test
```

## Modal component

Asked features:
* Modal with a closed button
* Customize closed button from props
* Close modal from its own content

## Props

### Interface

? = optional

* **showModal?**: boolean
* **setShowModal**: Dispatch<SetStateAction<boolean>>
* **CloseIcon?**: ComponentType
* **title**: string
* **Body?**: ComponentType
* **footer**: string
* **rounded?**: boolean

### Explanation

* **showModal?**: state of the modal. Opened if true
* **setShowModal**: function to controll the state of the modal
* **CloseIcon?**: component used to customize the close button
* **title**: title of the modal
* **Body?**: body of the modal. You can render whatever you want
* **footer**: footer of the modal
* **rounded?**: if true, the modal border is rounded, if not, squared


## Tests
- The modal should not be visible when close button is clicked
- The modal should not be visible when clicking outside
