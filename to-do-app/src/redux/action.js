export const ADD_Task = "ADD_Task";
export const REMOVE_Task = "REMOVE_Task";
export const TOGGLE_Task = "TOGGLE_Task";
export const MARK_COMPLETED = "MARK_COMPLETED";
export const MARK_INCOMPLETE = "MARK_INCOMPLETE";
export const FILTER_Task = "FILTER_Task";
export const MARK_ALL_COMPLETED = "MARK_ALL_COMPLETED";
export const UPDATE_SEARCH_TERM = "UPDATE_SEARCH_TERM";

export const addTask = (text) => ({
    type: ADD_Task,
    payload: {text},
  });
  
  export const removeTask = (id) => ({
    type: REMOVE_Task,
    payload: {id},
  });

  export const toggleTask = (id) => ({
    type: TOGGLE_Task,
    payload: {id},
  });
    
  export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: {id},
  });
  
  export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: {id},
  });
  
  export const filterTask = (filter) => ({
    type: FILTER_Task,
    payload: {filter},
  });

  export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,   
  });

  export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: {searchTerm},
  });