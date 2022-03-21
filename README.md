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

* **showModal**: boolean
* **CloseIcon?**: any
* **title**: string
* **footer**: string
* **rounded?**: boolean

### Explanation

* **showModal**: state of the modal. Opened if true
* **CloseIcon?**: component used to customize the close element
* **title**: title of the modal
* **footer**: footer of the modal
* **rounded?**: if true, the modal border is rounded, if not, squared


## Tests
- The modal should not be visible when close button is clicked
- The modal should not be visible when clicking outside
