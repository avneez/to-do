import { useState, useEffect } from 'react'
import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import EditTask from './EditTask';

const Home = () => {

    // const defaultTasks = [{
    //   id: 1,
    //   text: 'Exercise',
    //   time: '9 AM'
    // },
    // {
    //   id: 2,
    //   text: 'Assignment',
    //   time: '12 PM'
    // },
    // {
    //   id: 3,
    //   text: 'Meet XYZ',
    //   time: '8 PM'
    // }
    // ];

    const [showAddTask, setShowAddTask] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // const [editForm, setEditForm] = useState(false)

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
        <div>
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAddValue={showAddTask} />

            {/* {showAddTask && <AddTask onAdd={addTask}/>} */}
            
            {isEditing ? (isEditing && <EditTask setIsEditing={setIsEditing} updateTask={updateTask} currentTask={currentTask} />) : (showAddTask && <AddTask onAdd={addTask} />)}


            {tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} setIsEditing={setIsEditing} setCurrentTask={setCurrentTask} />
            ) : ('No Any Tasks To Show')}
        </div>
    )
}

export default Home