import React, { Fragment } from "react";
import './Task.css'

const Task = (props)=>{

   const  imgs='https://img.icons8.com/?size=512&id=67884&format=png';

    const deleteHandler = ()=>{
        props.onDelete(props.task);
    }

    return <Fragment>
        <div className="tasks1">  {props.task} 
        <button className="btn-2" onClick={deleteHandler}><img src={imgs} alt='delete' className="imgs"/></button> </div>
    </Fragment>;
}

export default Task;