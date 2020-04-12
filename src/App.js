import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useConfirm = (message = "", onConfirm, onCancel) => {
  if(!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if(!onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if(window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  }
  return confirmAction
}

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  } 
  const enablePrevent = () => window.addEventListener("beforeunload", listener)
  const disablePrevent = () => window.removeEventListener("beforeunload", listener)
  return {enablePrevent, disablePrevent}
}

const App = () => {
  const deleteWorld = () => console.log("Deleting the world")
  const abort= () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
  
  const {enablePrevent, disablePrevent} = usePreventLeave()
  return (
    <div className="App">
      <h2>Hello</h2>
      <button onClick={confirmDelete}>Delete the World</button>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
}

export default App;
