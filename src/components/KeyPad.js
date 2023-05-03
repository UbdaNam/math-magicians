import React from 'react';
import PropType from 'prop-types';

const KeyPad = ({ keypad, handleClick }) => (
  <button onClick={handleClick} className="key-btn" type="button">{keypad}</button>
);

KeyPad.propTypes = {
  keypad: PropType.string.isRequired,
  handleClick: PropType.func.isRequired,
};

export default KeyPad;
