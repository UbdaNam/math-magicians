import React from 'react';
import PropType from 'prop-types';

const KeyPad = ({ keypad }) => (
  <button className="key-btn" type="button">{keypad}</button>
);

KeyPad.propTypes = {
  keypad: PropType.string.isRequired,
};

export default KeyPad;
