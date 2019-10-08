import React from "react";


const ToDo = props => {
  console.log(props)
  return (
    <div
      onClick={() => {
        props.markToDo(props.item.id);
      }}
    className = {`toggle${props.item.completed ? ' completed' : ''}`}
    >
      <p className= {`para${props.item.completed ? ' completed' : ''}`}>{props.item.name}</p>
    </div>
  );
};
export default ToDo;