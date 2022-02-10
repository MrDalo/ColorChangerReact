
import './App.css';
import MidBox from './MidBox';
import React, { useState } from 'react';
import UserInput from './Input';

function App() {
  const [color, setColor] = new useState('Type color');



  return (
    <div id='main'>

    <MidBox color={color} setColor={setColor}/>

    <UserInput color={color} setColor={setColor}/>
    </div>

  );
}

export default App;
