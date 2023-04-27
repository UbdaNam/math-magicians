import React from 'react';
import KeyPad from './KeyPad';

function Calculator() {
  const keyArr = ['AC', '+/-', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" name="result" id="result" />
        <div className="key-pad-container">
          {
            keyArr.map((key) => <KeyPad keypad={key} key={key} />)
          }
        </div>
      </div>
    </div>
  );
}

export default Calculator;
