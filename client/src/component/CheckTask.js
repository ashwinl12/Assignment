import React from 'react'
import "../style/CheckTask.css"

function CheckTask(props) {
  return (
    <div className='checkList'>{props.name}</div>
  )
}

export default CheckTask