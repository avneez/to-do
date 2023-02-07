import Task from "./Task"

const Tasks = ({ tasks, onDelete, setIsEditing, setCurrentTask }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} setIsEditing={setIsEditing} setCurrentTask={setCurrentTask}/>
            ))}
        </>
    )
}

export default Tasks