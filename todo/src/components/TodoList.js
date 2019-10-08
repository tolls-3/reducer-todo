
import React from "react";
import ToDo from "./Todo";

const ToDoList = props => {
  //console.log(props);
  return (
    <div>
      {props.toDo.map(item => (
        <ToDo key={item.id} item={item} markToDo={props.markToDo} />
      ))}
      <button onClick={props.clearTask}>Clear Task</button>
    </div>
  );
};

export default ToDoList;