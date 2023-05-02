import React from 'react';
import PropType from 'prop-types';
import style from '../styles/KeyPad.module.css';

const KeyPad = ({ keypad, handleClick }) => (
  <button onClick={handleClick} className={style['key-btn']} type="button">
    {keypad}
  </button>
);

KeyPad.propTypes = {
  keypad: PropType.string.isRequired,
  handleClick: PropType.func.isRequired,
};

export default KeyPad;
