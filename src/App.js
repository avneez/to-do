import React from 'react';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



function App() {
  const [tasks, setTasks] = useState([
    {
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
        id:3,
        text: 'Meet XYZ',
        time: '8 PM'
    }
  ]);


  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=> task.id!==id))
  }


  return (
    <div className="container">
      <Header />
      <AddTask/>
      {tasks.length > 0? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Any Tasks')}
    </div>
  );
}

export default App;
