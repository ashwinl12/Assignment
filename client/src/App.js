import { useState } from 'react';
import './App.css';
import CheckTask from './component/CheckTask';
import Task from './component/Task';
import { FaPlusCircle, FaTrash, FaCheckCircle } from "react-icons/fa";

function App() {

  const [TodoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [checkList, setCheckList] = useState([]);

  const handleChange = (e)=>{
    setNewTask(e.target.value);
  }

  const addTask = ()=> {

    const taskObject = {
      id: TodoList.length === 0 ? 1 : TodoList[TodoList.length-1].id + 1,
      taskName: newTask
    };

    // spread operator ...
    setTodoList([...TodoList, taskObject]);
  }

  const deleteTask = (name, id)=>{
    // deleting using filter function
    const newList = TodoList.filter((item)=>{
      if(item.id===id) {
        return false;
      } else {
        return true;
      }
    });

    setTodoList(newList);
  }

  const markTask = (name, id)=>{
    setCheckList([...checkList, {id: id, taskName: name}]);
    const newList = TodoList.filter((item)=> item.id!==id);
    setTodoList(newList);
  }


  return (
    <div className="App">
      <div className='title'>To-Do List</div>
      <div className='box'>
        <div className='addTask'>
          <input type="text" name='newTask' onChange={handleChange} placeholder="Add a task..."/>
          <FaPlusCircle size="30px" onClick={addTask}/>
        </div>
        <div className="toDoList">
            {
              TodoList.map((obj)=>{
                return (<Task name={obj.taskName} id={obj.id} markTask={markTask} deleteTask={deleteTask}/>)
              })
            }
        </div>    
        <div className="checkList">
            {
              checkList.map((obj)=>{
                return (<CheckTask name={obj.taskName}/>)
              })
            }
        </div>
      </div>
    </div>
  );
}

export default App;
