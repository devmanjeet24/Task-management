import React from 'react'
// import { CreateTask } from '../../../Backend/Controller/Taskcontroller';
import { createTask } from '../Api.js';
import { useState } from 'react';

const Taskform = ({ refresh }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await createTask({ title, description });
        refresh();
        setTitle("");
        setDescription("");

    };

    return (
        <>

        <div className='mb-7 flex justify-center'>

            <form action="" className='flex flex-col justify-center align-center w-2xl gap-4 bg-amber-100 p-7 rounded-2xl ' onSubmit={handleSubmit} >

                <input 
                type="text"  
                placeholder='Enter Task Title' 
                value={title} 
                onChange={(e)=>setTitle(e.target.value)} 
                required
                className='text-center border-2 border-black p-2 rounded-2xl'
                />

                <input 
                type="text" 
                placeholder='Enter task Description' 
                value={description} 
                onChange={(e)=>setDescription(e.target.value)}
                className='text-center border-2 border-black p-2 rounded-2xl'
                />
                <button type='submit' className='px-4 py-2 bg-amber-300 hover:bg-amber-400 text-white rounded-md transition'>Add Task</button>
            </form>
            

            </div>

        </>
    )
}

export default Taskform;