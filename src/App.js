import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const App = () => {
  const [item, setItem] = useState(1)
  const incrementItem = () => {
    if(item<10)
      setItem(item + 1); 
  }
  const decrementItem = () => {
    if(item>0)
      setItem(item - 1);
  }
  return (
    <div className="App">
      <h2>Hello {item}</h2>
      <h2>Start</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>Decrement</button>
    </div>
  );
}

export default App;
