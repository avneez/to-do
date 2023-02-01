import React from 'react';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';



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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
