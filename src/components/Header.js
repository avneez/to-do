import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onClick =() =>{
    console.log('Clicked')
  }

  return (
    <header className="header">
        <h1>{title}</h1>
    <Button color='darkgreen' text='Add' onClick={onClick}/>
    </header>
  )
}


Header.defaultProps ={
    title: 'To-Do',
}

Header.propTypes ={
    title: PropTypes.string.isRequired
}

export default Header