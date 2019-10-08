import React, { useState } from "react";
import { initialToDoData } from "./reducers/reducer";

const App = () => {
  const [toDos, setToDos] = useState(initialToDoData);

  const markToDo = id => {
    //console.log("Test:", id);
    setToDos(
      toDos.map(item => {
        if (item.id !== id) {
          return item;
        } else {
          return { ...item, completed: !item.completed };
        }
      })
    );
  };

  const clearTask = e => {
    e.preventDefault();
    setToDos(
      toDos.filter(item => {
        return !item.completed;
      })
    );
  };

  const addToDo = (e, taskName) => {
    //e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };
    setToDos([...toDos, newTask]);
  };

  const clearList = () => {
    setToDos({
      toDos: []
    });
  };

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      {/* <ToDoForm clearList={this.clearList} addToDo={this.addToDo} /> */}
      <div>
        {/* <ToDoList
            toDo={this.state.initialToDoData}
            markToDo={this.markToDo}
            clearTask={this.clearTask}
          /> */}
      </div>
    </div>
  );
};

export default App;
