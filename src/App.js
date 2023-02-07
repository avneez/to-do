import React from 'react';
import { useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
// import Todo1page from './Todo1page';



function App() {
  const defaultTasks = [{
    id: 1,
    text: 'Exercise',
    time: '9 AM'
  },
  {
    id: 2,
    text: 'Assignment',
    time: '12 PM'
  },
  {
    id: 3,
    text: 'Meet XYZ',
    time: '8 PM'
  }
  ];

  const [showAddTask, setShowAddTask] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // const [editForm, setEditForm] = useState(false)

  const [currentTask, setCurrentTask] = useState({});

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      return JSON.parse(savedTasks)
    } else {
      return defaultTasks;
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

// console.log(isEditing)
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />

      {showAddTask && <AddTask onAdd={addTask}/>}

      {isEditing && (<EditTask setIsEditing={setIsEditing} updateTask={updateTask} currentTask={currentTask}/>)}


      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} setIsEditing={setIsEditing} setCurrentTask={setCurrentTask}/>
      )
       : ('No Any Tasks')}



    </div>
  );

}

export default App;
