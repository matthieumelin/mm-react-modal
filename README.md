# React Modal Plugin

A simple plugin for create modal for React.js

## Features

- Custom style on components
- Dynamic display control

# Get started

**Requirements**
- React 18.2.0+

**Installation**
- Using npm `npm install @matthieumelin/mm-react-modal`
- Using yarn `yarn add @matthieumelin/mm-react-modal`

**Usage**
- ``isOpen`` (boolean): variable controlling the display of the modal
- ``message`` (string): custom message written on the modal
- ``onConfirm`` (function): action triggered when clicking on the 'closed' icon (& triggered on clicking outside the modal if no action is provided for this action).
- ``customCloseButton`` (object): custom style of the close button
- ``customMessage`` (object): custom style of the message written on the modal
- ``customContainer`` (object): custom style of modal container

*App.js (default)*
```javascript
import React, { useState } from "react";
import Modal from "@matthieumelin/mm-react-modal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <div onClick={() => setModalIsOpen(!modalIsOpen)}>
        Click here to open modal
      </div>

      <Modal
      message={"Employeee Created!"}
      isOpen={modalIsOpen} 
      onConfirm={toggleModal}/>
    </div>
  );
}
export default App;
```

*App.js (with custom style)*
```javascript
import React, { useState } from "react";
import Modal from "@matthieumelin/mm-react-modal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="App">
      <div onClick={() => setModalIsOpen(!modalIsOpen)}>
        Click here to open modal
      </div>

      <Modal customCloseButton={{
        position: "absolute",
        right: -10,
        top: -10,
        width: 15,
        height: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 100,
      }}
      customMessage={{ textAlign: "center", width: "100%" }}
      customContainer={{ position: "relative", height: 50, width: 400 }}
      message={"Employeee Created!"}
      isOpen={modalIsOpen} 
      onConfirm={toggleModal}/>
    </div>
  );
}
export default App;
```
