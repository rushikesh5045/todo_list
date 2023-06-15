
import './App.css';
import { Fragment, useState } from 'react';
import Task from './Task';

function App() {

  const [task,setTask] = useState('');
  const [taskArray,setTaskArray] = useState([]);



  const updatetask =(event)=>{
    setTask(event.target.value)
  }

  const addTask=(event)=>{
    event.preventDefault();

    if(task.toString().trim().length<1){
      return
    }

    setTaskArray([...taskArray,task]);
    setTask('');
    
  }

  const deleteTask = (taskToDelete)=>{
    const updatedArray=  taskArray.filter(task => task !==taskToDelete);
    setTaskArray(updatedArray)
  }

  const renderTasks=()=>{
      return taskArray.map((task,index)=> <Task key={index} task={task} onDelete={deleteTask}/>)
  }

  return (

   <Fragment>
     <h1>
      To-Do List App
    </h1>
    <div className="App">
     <form onSubmit={addTask}>
      <input type='text' name='task' htmlFor="task"  onChange={updatetask} value={task}/>
      <button type='submit' className='btn'>
      + Add a task
      </button>    
     </form>
     
    </div>
    <div className='tasks'>
     {renderTasks()}
     </div>
   </Fragment>
  );
}

export default App;
