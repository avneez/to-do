import { FaTimes, FaBolt } from 'react-icons/fa'


const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task">
      <h3 >
        {task.text}
        <div>
          <FaBolt onClick={() => onEdit(task)} />
          <FaTimes onClick={() => onDelete(task.id)} />
        </div>
      </h3>
      <p>{task.time}</p>
    </div>
  )
}

export default Task