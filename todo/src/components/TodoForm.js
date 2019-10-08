import React, { useState } from "react";



const ToDoForm = (props)=>{
  const [taskName, setTaskName]= useState("")
  //console.log(props)

 const changeHandler = e => {
    setTaskName(
    e.target.value
  );
    //console.log(e.target);
  };

  const submitHandler = e => {
    props.addToDo(e,taskName);
    setTaskName( "" );
  };

    return (
      <div>
        <input
          type="text"
          name="task"
          value={taskName}
          onChange={changeHandler}
        />
        <button onClick={submitHandler}>Add Task</button>
        <button onClick={props.clearList}>Clear All Task</button>
      </div>
    );
}

export default ToDoForm;