import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useScroll = () => {
  const [state, setState] = useState({x:0, y:0})
  const onScroll = (event) => {
    setState({x : window.scrollX, y: window.scrollY})
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  return state
}

const App = () => {
  const {y} = useScroll();
  return (
    <div className="App" style={{height: '1000vh'}}>
      <h2 style={{position: "fixed", color: y > 100 ? "red" : "blue"}}>Hello</h2>
      
    </div>
  );
}

export default App;
