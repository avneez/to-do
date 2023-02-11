import { FaTimes, FaBolt } from 'react-icons/fa'

const Task = ({ task, onDelete, setIsEditing, setCurrentTask, onAdd }) => {
  return (
    <div className="task">
      <h3 >
        {task.text}
        <div>
          <FaBolt onClick={() =>{
            setIsEditing(true)
            setCurrentTask(task)
            
          }
            } />
          <FaTimes onClick={() => onDelete(task.id)} />
        </div>
      </h3>
      <p>{task.time}</p>
    </div>
  )
}

export default Task