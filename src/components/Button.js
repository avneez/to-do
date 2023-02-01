import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ color, text, textC, onClick }) => {

  return (
    <button
    onClick={onClick}
    style={{ backgroundColor: color,}}
    className='btn'>{text}</button>
  )
}

Button.defaultProps = {
  color: 'lightblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button