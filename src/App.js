import {useState, useEffect, useMemo, useCallback, Component } from 'react';
import ButtonBox from './components/buttons/bottonBox';
import './components/buttons/buttonBoxstyles.css';
import './App.css';
import './components/particles/particles.component';
import Particle from './components/particles/particles.component';

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
    try{
      let x = eval(screenDisplay);
      setScreenDisplay(x);
    } catch(e) { 
      setScreenDisplay("error");
     }
 }

const Calculator = () => (
  <div>
    <input className= 'myScreen'
          type='text'
          value={screenDisplay}
        />
    <ButtonBox buttons= {charaValues} handler1={numberClicked} handler2= {equalButton} handler3= {clearButton}/>
  </div>
);

const particleComponent = useMemo(() => <Particle />, [])

  return (
    <div className="App">
      {particleComponent}
      <h1 className = 'title'>Rose's Calculator</h1>
      <Calculator/>
    </div>
  );
}

export default App;