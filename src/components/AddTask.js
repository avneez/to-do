import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-data form-data-check'>
                <label>Task</label>
                <input type='text' plaeholder='Add Task' />
            </div>
            <div className='form-data form-data-check'>
                <label>Time</label>
                <input type='text' plaeholder='Add Time' />
            </div>
            <input type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask