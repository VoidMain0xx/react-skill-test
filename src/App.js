// App.js
import React from 'react';
import Tooltip from './Component/Toolkit';
import './App.css'

const App = () => {
  return (
    <div className="app-container">
    <Tooltip position="top" text="Thanks For Hovering I am A tool Tip">
      <button className="centered-button">Hover Me</button>
    </Tooltip>
  </div>
  );
};

export default App;
