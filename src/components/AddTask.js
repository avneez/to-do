import { useState } from 'react'


const AddTask = ({ onAdd }) => {
    // const [text, setText] =useState('')
    // const [time, setTime] =useState('')

    const [userData, setUserData] = useState({ text: '', time: '' })


    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(userData)

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

    return (
        <>
            <form className='add-form' onSubmit={onSubmit} >
                <div className='form-data form-data-check'>
                    <label>Task</label>
                    <input type='text' placeholder='🖊️ Add Task' value={userData.text} onChange={setUserText} />
                </div>
                <div className='form-data form-data-check'>
                    <label>Desc / Time</label>
                    <input type='text' placeholder='Add Desc / Time' value={userData.time} onChange={setUserTime} />
                </div>
                <input type='submit' value='Save Task' className='btn btn-block' />
            </form>
        </>
    )
}

export default AddTask