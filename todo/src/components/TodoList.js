
import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  //console.log(props)
  return (
    <div>
      {props.toDo.map(param => (
        <ToDo key={param.id} item={param} markToDo={props.markToDo} />
      ))}
      <button onClick={props.clearTask}>Clear Task</button>
    </div>
  );
};

export default ToDoList;