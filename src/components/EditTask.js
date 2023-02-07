import React, { useState } from 'react'

const EditTask = ({ updateTask, currentTask }) => {

    const [userData, setUserData] = useState(currentTask)

    const handleEditText = (e) => {
        setUserData({ ...userData, text: e.target.value });
        // console.log(currentTask);
    }

    const handleEditTime = (e) => {
        setUserData({ ...userData, time: e.target.value });
        // console.log(currentTodo);
    }

    const editFormSubmit = (e) => {
        e.preventDefault();
        updateTask(userData.id, userData);
    }

    return (
        <form className='add-form' onSubmit={editFormSubmit} >
            <div className='form-data form-data-check'>
                <label>Task</label>
                <input type='text' placeholder='Edit Task' value={userData.text} onChange={handleEditText} />
            </div>
            <div className='form-data form-data-check'>
                <label>Time</label>
                <input type='text' placeholder='Edit Time' value={userData.time} onChange={handleEditTime} />
            </div>
            <input type='submit' value='Update Task' className='btn btn-block' />
        </form>
    )
}

export default EditTask