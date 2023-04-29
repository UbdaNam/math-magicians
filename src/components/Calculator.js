import React, { useState } from 'react';
import KeyPad from './KeyPad';
import calculate from '../logic/calculate';

function Calculator() {
  const keyArr = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  const [currentData, setCurrentData] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const handleClick = (obj, buttonValue) => {
    setCurrentData(calculate(obj, buttonValue));
  };

  return (
    <div className="calc-container">
      <div className="calculator">
        <input type="text" name="result" id="result" value={currentData.next || currentData.operation || currentData.total || '0'} readOnly />
        <div className="key-pad-container">
          {keyArr.map((key) => (
            <KeyPad
              handleClick={(e) => handleClick(currentData, e.target.textContent)}
              keypad={key}
              key={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
