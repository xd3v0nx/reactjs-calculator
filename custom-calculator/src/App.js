import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const Button = ({ value, onClick }) => (
    <button className={`button ${value === '=' ? 'equal' : ''}`} onClick={() => onClick(value)}>
      {value}
    </button>
  );

  return (
    <div className="app">
      <input className="input" type="text" value={input} readOnly />
      <div className="buttons">
        <Button value="C" onClick={handleClear} />
        <Button value="/" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="%" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button value="+/-" onClick={() => setInput((prev) => (prev * -1).toString())} />
        <Button value="=" onClick={handleResult} />
      </div>
    </div>
  );
}

export default App;