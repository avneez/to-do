import { useState } from 'react'



const AddTask = ({onAdd}) => {
    // const [text, setText] =useState('')
    // const [time, setTime] =useState('')

    const [userData, setUserData] = useState({text:'',time:''})

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(userData)

        if(!userData.text){
            alert('Please add a Task')
            return;
        }

        onAdd({text:userData.text, time:userData.time}) //destructing from an object

        setUserData({text:'', time:''})
    }



    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-data form-data-check'>
                <label>Task</label>
                <input type='text' placeholder='🖊️ Add Task' value={userData.text} onChange={(e)=> setUserData({...userData,text:e.target.value})}/>
            </div>
            <div className='form-data form-data-check'>
                <label>Time</label>
                <input type='text' placeholder='Add Time' value={userData.time} onChange={(e)=> setUserData({...userData,time:e.target.value})}/>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask