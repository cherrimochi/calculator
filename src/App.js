import {useState, useEffect} from 'react';
import { Component } from 'react';
import ButtonBox from './components/buttons/bottonBox';
import Button from './components/buttons/button'
import './components/buttons/buttonBoxstyles.css';
import './App.css';

const App = () => {

  const [screenDisplay, setScreenDisplay] = useState('');

  const charaValues = [
    7, 8, 9, "c",
    4, 5, 6,"*",
    1, 2, 3, "/",
    0, "(",")", "+",
    "=", ".","-",
 
  ];

  const numberClicked = (event) => {
    setScreenDisplay(screenDisplay + event.target.innerHTML);
 }

 const clearButton = () => {
    setScreenDisplay('');
 }

 const equalButton = () => {
    let x = eval(screenDisplay);
    setScreenDisplay(x);
 }

  return (
    <div className="App">
      <div>
        <h1 className = 'title'>Rose's Calculator</h1>
        <input className= 'myScreen'
          type='text'
          value={screenDisplay}
        />
      </div>
      <ButtonBox buttons= {charaValues} handler1={numberClicked} handler2= {equalButton} handler3= {clearButton}/>
    </div>
  );
}

export default App;
