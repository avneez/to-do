import { useState } from 'react'



const AddTask = ({onAdd}) => {
    const [text, setText] =useState('')
    const [time, setTime] =useState('')


    const onSubmit=(e)=>{
        e.preventDefault()

        if(!text){
            alert('Please add a Task')
            return;
        }

        onAdd({text,time})

        setText('')
        setTime('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-data form-data-check'>
                <label>Task</label>
                <input type='text' placeholder='🖊️ Add Task' value={text} onChange={(e)=> setText(e.target.value)}/>
            </div>
            <div className='form-data form-data-check'>
                <label>Time</label>
                <input type='text' placeholder='Add Time' value={time} onChange={(e)=> setTime(e.target.value)}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask