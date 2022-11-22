import React from 'react'
import '../style/Task.css'
import { FaPlusCircle, FaTrash, FaCheckCircle } from "react-icons/fa";

function Task(props) {
  return (
    <div className='items'>
        <div className='item1'>{props.name}</div>
        <FaCheckCircle size="25px" color='blue' onClick={()=>{
            props.markTask(props.name, props.id)
        }} className='item2'/>
        <FaTrash size="25px" color='red' onClick={()=>{
            props.deleteTask(props.name, props.id)
        }} className='item3'/>
    </div>
  )
}

export default Task