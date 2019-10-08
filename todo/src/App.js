import React, { useReducer } from "react";
import {
  initialToDoData,
  reducer,
  ADD_ITEM,
  MARK_TO_DO,
  CLEAR_TASK,
  CLEAR_ALL_TASKS
} from "./reducers/reducer";
import ToDoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialToDoData);
  //console.log(state);

  const markToDo = id => {
    dispatch({ type: MARK_TO_DO, payload: id });
  };

  const clearTask = e => {
    e.preventDefault();
    dispatch({ type: CLEAR_TASK });
  };

  const addToDo = (e, taskName) => {
    e.preventDefault();
    dispatch({ type: ADD_ITEM, payload: taskName });
  };

  const clearList = () => {
    dispatch({ type: CLEAR_ALL_TASKS });
  };

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      {/* clearList={clearList} */}
      <ToDoForm clearList={clearList} addToDo={addToDo} />
      <div>
        <ToDoList
          toDo={state.tasks}
          markToDo={markToDo}
          clearTask={clearTask}
        />
      </div>
    </div>
  );
};

export default App;
