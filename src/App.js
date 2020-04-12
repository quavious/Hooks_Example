import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const useFadeIn = (duration=1, delay=0) => {
  const element = useRef();
  useEffect(() => {
    if(element.current) {
      const {current} = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
      current.style.opacity = 1
    }
  }, [])
  if(typeof duration !== "number") return;
  return {ref:element, style:{opacity: 0}};
}

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine)
  const handleChange = () => {
    if(typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("online", handleChange)
    window.addEventListener("offline", handleChange)
    return () => {
      window.removeEventListener("online", handleChange)
      window.removeEventListener("offline", handleChange)
    }
  }, [])
  return status
}

const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "We are offline")
  }

  const onLine = useNetwork(handleNetworkChange);
  const fadeIn = useFadeIn(1,2);
  const fadeInP = useFadeIn(5,10)
  return (
    <div className="App">
      <h2 {...fadeIn}>Hello</h2>
      <p {...fadeInP}>lorem lalala</p>
      <h1>{onLine ? "online" : "offline"}</h1>
    </div>
  );
}

export default App;
