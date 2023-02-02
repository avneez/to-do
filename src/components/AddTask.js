import { useState } from 'react'



const AddTask = () => {
    const [text, setText] =useState('')
    const [time, setTime] =useState('')


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
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask