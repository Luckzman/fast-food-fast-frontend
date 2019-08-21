import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, name, handleClick }) {
  return (
    <button type="button" className={className} onClick={handleClick}>{name}</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
