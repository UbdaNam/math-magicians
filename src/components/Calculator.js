import React from 'react';
import PropType from 'prop-types';

const KeyPad = ({ keypad }) => (
  <button className="key-btn" type="button">{keypad}</button>
);

function Calculator() {
  const keyArr = ['AC', '+/-', '%', '+', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

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

KeyPad.propTypes = {
  keypad: PropType.string.isRequired,
};

export default Calculator;
