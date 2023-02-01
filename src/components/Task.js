import React from 'react';
import {FaTimes} from 'react-icons/fa'


const Task = ({task}) => {
  return (
    <div className="task">
        <h3> {task.text} <FaTimes/> </h3>
        <p>{task.time}</p>
    </div>
  )
}

export default Task