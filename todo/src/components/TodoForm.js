import React from "react";

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: ""
    };
  }

  changeHandler = e => {
    this.setState({
      taskName: e.target.value
    });
    //console.log(e.target);
  };

  submitHandler = e => {
    this.props.addToDo(e, this.state.taskName);
    this.setState({ taskName: "" });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="task"
          value={this.state.taskName}
          onChange={this.changeHandler}
        />
        <button onClick={this.submitHandler}>Add Task</button>
        <button onClick={this.props.clearList}>Clear All Task</button>
      </div>
    );
  }
}

export default ToDoForm;
