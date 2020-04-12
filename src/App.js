import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const content = [
  {
    tab: "Section 1",
    content: "I am the content of section 1"
  },
  {
    tab: "Section 2",
    content: "I am the content of section 2"
  }
]

const useTabs = (initialTab, allTabs) => {
  const [index, setIndex] = useState(initialTab)
  if(!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[index],
    changeItem : setIndex
  }
}

const App = () => {
  const {currentItem, changeItem} = useTabs(0, content)
  return (
    <div className="App">
      <h2>Hello</h2>
      {content.map((section, index) => <button onClick={() => changeItem(index)}>{section.tab}</button>)}
      <div>
        {currentItem.content}
      </div>
    </div>
  );
}

export default App;
