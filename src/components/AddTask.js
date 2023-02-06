import React, { useState } from 'react'



const AddTask = ({ onAdd }) => {
    // const [text, setText] =useState('')
    // const [time, setTime] =useState('')

    const [userData, setUserData] = useState({ text: '', time: '' })

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(userData)

        if (!userData.text) {
            alert('Please add a Task')
            return;
        }

        onAdd({ text: userData.text, time: userData.time }) //destructing from an object

        setUserData({ text: '', time: '' })
    }

    function setUserText(e) {
        setUserData({ ...userData, text: e.target.value })
    }

    function setUserTime(e) {
        setUserData({ ...userData, time: e.target.value })
    }



    // boolean state to know if we are editing
    const [isEditing, setIsEditing] = useState(false);
    // object state to set so we know which todo item we are editing
    const [currentTodo, setCurrentTodo] = useState({});


    function handleEditText(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        console.log(currentTodo);
    }
    function handleEditTime(e) {
        setCurrentTodo({ ...currentTodo, time: e.target.value });
        // console.log(currentTodo);
    }



    return (
        <>
            {isEditing ? (
                <form className='add-form' onSubmit={onSubmit} >
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

            ) : (

                <form className='add-form' onSubmit={onSubmit} >
                    <div className='form-data form-data-check'>
                        <label>Task</label>
                        <input type='text' placeholder='🖊️ Add Task' value={userData.text} onChange={setUserText} />
                    </div>
                    <div className='form-data form-data-check'>
                        <label>Time</label>
                        <input type='text' placeholder='Add Time' value={userData.time} onChange={setUserTime} />
                    </div>
                    <input type='submit' value='Save Task' className='btn btn-block' />
                </form>
            )}


        </>
    )
}

export default AddTask