export const ADD_ITEM = "ADD_ITEM";
export const MARK_TO_DO = "MARK_TO_DO";
export const CLEAR_TASK = "CLEAR_TASK";
export const CLEAR_ALL_TASKS = "CLEAR_ALL_TASKS";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newTask = {
        id: Date.now(),
        name: action.payload,
        completed: false
      };
      return {
        tasks: [...state.tasks, newTask]
      };
    case MARK_TO_DO:
      return {
        tasks: state.tasks.map(item => {
          if (action.payload !== item.id) {
            return item;
          } else {
            return { ...item, completed: !item.completed };
          }
        })
      };

    case CLEAR_TASK:
      return {
        tasks: state.tasks.filter(item => {
          return !item.completed;
        })
      };

    case CLEAR_ALL_TASKS:
      return {
        tasks: []
      };

    default:
      return state;
  }
};

export const initialToDoData = {
  tasks: [
    {
      item: "Study JavaScript",
      completed: false,
      id: 1
    },
    {
      item: "Exercise",
      completed: false,
      id: 12
    },
    {
      item: "Buy Groceries",
      completed: false,
      id: 123
    },
    {
      item: "Fix car",
      completed: false,
      id: 1234
    },
    {
      item: "Prepare revised invoice",
      completed: false,
      id: 12345
    },
    {
      item: "Do laundry",
      completed: false,
      id: 123456
    }
  ]
};
