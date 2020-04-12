import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useClick = (onClick) => {
  const element = useRef();
  
  useEffect(() => {
    if(element.current){
      element.current.addEventListener("click", onClick)
      console.log("hello")
    }
    return () => {
      if(element.current)
        element.current.removeEventListener("click", onClick)
    }
  },[])
  if(typeof onClick !== "function") return;
  return element
}

const App = () => {
  const sayHello = () => console.log("say hello")
  const title = useClick(sayHello); 
  return (
    <div className="App">
      <h2 ref={title}>Hello</h2>
    </div>
  );
}

export default App;
