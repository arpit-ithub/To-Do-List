import { ADD_Task, FILTER_Task, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETE, REMOVE_Task, TOGGLE_Task, UPDATE_SEARCH_TERM } from "./action";

const initialState = {
  tasks: [],
  flter: "ALL",
  searchTerm: "",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_Task:
      return {
        tasks: [
          ...state.tasks,
          { text: action.payload.text, completed: false },
        ],
        filter: state.flter,
        searchTerm: state.searchTerm,
      };
    case TOGGLE_Task:
      return {
        tasks: state.tasks.map((task, index) => index === action.payload.id ? { ...task, completed: !task.completed } : task),
        filter: state.flter,
        searchTerm: state.searchTerm,
      };
    case REMOVE_Task:
      return {
        tasks: state.tasks.filter((task, index) => index !== action.payload.id),
        filter: state.flter,
        searchTerm: state.searchTerm,
      };
    case MARK_COMPLETED:
        return {
            tasks: state.tasks.map((task, index) => index === action.payload.id ? { ...task, completed: true } : task),
            filter: state.flter,
            searchTerm: state.searchTerm,
        };
    case MARK_INCOMPLETE:
      return {
        tasks: state.tasks.map((task, index) => index === action.payload.id ? { ...task, completed: false } : task),
        filter: state.flter,
        searchTerm: state.searchTerm,
      };
    case FILTER_Task:
        return {
            tasks: state.tasks,
            filter: action.payload.filter,
            searchTerm: state.searchTerm,
        };
    case UPDATE_SEARCH_TERM:
        return {
            tasks: state.tasks,
            filter: state.flter,
            searchTerm: action.payload.searchTerm,
        };
    case MARK_ALL_COMPLETED:
        return {
            tasks: state.tasks.map((task) => ({...task, completed: true })),
            filter: state.flter,
            searchTerm: state.searchTerm,
        }
    default:
    return state;
  }
};
export default taskReducer;