import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle)
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title')
    htmlTitle.innerText = title
  }
  useEffect(updateTitle, [title])
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loading")
  setTimeout(() => {
    titleUpdater("Loaded")
  }, 3000)
  return (
    <div className="App">
      <h2>Hello</h2>
      
    </div>
  );
}

export default App;
