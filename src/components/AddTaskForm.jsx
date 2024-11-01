import React from 'react';
import {useState} from 'react'

const AddTaskForm = ({ addTask }) => {
    const [task, setTask] = useState('')

    const handleSubmit = (e) => {
    e.preventDefault()
    if (task.trim()) {
        addTask(task);
        setTask(''); 
    }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input value={task} onChange = {(e) =>  setTask(e.target.value)} placeholder="Write your task"/>
            <button type="submit">Add Task</button>
        </form>
        </>
    )
}

export default AddTaskForm;