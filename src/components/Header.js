import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAddValue }) => {

  return (
    <header className="header">
        <h1>{title}</h1>
    <Button color={showAddValue ? 'red' : 'darkgreen'}
            text={showAddValue ? 'Cancel': 'Add'}
            onClick={onAdd}
    />
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