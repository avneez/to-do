import { useState, useEffect } from 'react'
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import EditTask from './EditTask';
import './TaskManager.css';

const Home = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTask, setCurrentTask] = useState({});

    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            return JSON.parse(savedTasks)
        } else {
            return [];
        }
    });

    //saving task in localStorage
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    //Adding task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1;
        const newTask = { id, ...task }
        setTasks([...tasks, newTask]);
        setShowAddTask(false); // Close form after adding
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    function updateTask(id, updatedTask) {
        const updatedItem = tasks.map((task) => {
            return task.id === id ? updatedTask : task;
        })

        setIsEditing(false);
        setTasks(updatedItem)
    }

    return (
        <div className="task-manager">
            <div className="task-manager-header">
                <h1>Task Management</h1>
                <p>Organize and track your daily tasks</p>
            </div>

            <div className="task-container">
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAddValue={showAddTask} />
                
                {isEditing ? (
                    <EditTask setIsEditing={setIsEditing} updateTask={updateTask} currentTask={currentTask} />
                ) : (
                    showAddTask && <AddTask onAdd={addTask} />
                )}

                <div className="tasks-section">
                    {tasks.length > 0 ? (
                        <Tasks tasks={tasks} onDelete={deleteTask} setIsEditing={setIsEditing} setCurrentTask={setCurrentTask} />
                    ) : (
                        <div className="no-tasks">
                            <p>No tasks to show</p>
                            <small>Click "Add" to create your first task</small>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home