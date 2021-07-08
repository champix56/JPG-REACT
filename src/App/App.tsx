import React from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
     <Button text="colored button" bgcolor="tomato" />
     <Button text="colored button" bgcolor="skyblue" />
    </div>
  );
}

export default App;
