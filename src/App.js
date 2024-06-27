import './App.css';
import React, { useState } from 'react';

function App(){
  

  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'Clear') {
      setDisplay('');
    } else if (value === '=') {
      try {
        setDisplay(eval(display));
      } catch {
        setDisplay('Error');
      }
    }
    else if(value === 'ceil'){
      setDisplay(Math.ceil(display))
    }
    else if(value === 'floor'){
      setDisplay(Math.floor(display))
    }

     else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="calculator">
      <div className='display'><h1>{display}</h1></div>
      
      <div className="first_class">
        <button className='item1' onClick={() => handleClick('1')}><h1>1</h1></button>
        <button className='item1' onClick={() => handleClick('2')}><h1>2</h1></button>
        <button className='item1' onClick={() => handleClick('3')}><h1>3</h1></button>
        <button className='item1' onClick={() => handleClick('+')}><h1>+</h1></button>
      </div>

      <div className="first_class">
        <button className='item1' onClick={() => handleClick('4')}><h1>4</h1></button>
        <button className='item1' onClick={() => handleClick('5')}><h1>5</h1></button>
        <button className='item1' onClick={() => handleClick('6')}><h1>6</h1></button>
        <button className='item1' onClick={() => handleClick('-')}><h1>-</h1></button>
      </div>

      <div className="first_class">
        <button className='item1' onClick={() => handleClick('7')}><h1>7</h1></button>
        <button className='item1' onClick={() => handleClick('8')}><h1>8</h1></button>
        <button className='item1' onClick={() => handleClick('9')}><h1>9</h1></button>
        <button className='item1' onClick={() => handleClick('*')}><h1>*</h1></button>
      </div>

      <div className="first_class">
        <button className='item1' onClick={() => handleClick('Clear')}><h1>Clear</h1></button>
        <button className='item1' onClick={() => handleClick('0')}><h1>0</h1></button>
        <button className='item1' onClick={() => handleClick('=')}><h1>=</h1></button>
        <button className='item1' onClick={() => handleClick('/')}><h1>/</h1></button>
      </div>

      <div className="first_class">
        <button className='item1' onClick={() => handleClick('(')}><h1>(</h1></button>
        <button className='item1' onClick={() => handleClick(')')}><h1>)</h1></button>
        <button className='item1' onClick={() => handleClick('&')}><h1>&</h1></button>
        <button className='item1' onClick={() => handleClick('|')}><h1>|</h1></button>
      </div>

      <div className="first_class">
        <button className='item1' onClick={() => handleClick('**')}><h1>power</h1></button>
        <button className='item1' onClick={() => handleClick('ceil')}><h1>ceil</h1></button>
        <button className='item1' onClick={() => handleClick('.')}><h1>.</h1></button>
        <button className='item1' onClick={() => handleClick('floor')}><h1>floor</h1></button>
      </div>

    </div>

    
  );
}

export default App;