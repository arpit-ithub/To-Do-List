
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTask, updateSearchTerm } from '../redux/action';

const Todo = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => dispatch(addTask(task)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (text) => {
    dispatch(addTask(text));
  };

  const addNewTask = () => {
    if (newTask.trim()) {
      handleAddTask(newTask);
      setNewTask('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>

      { /* input text and button */}
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Add Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={addNewTask}
        >
          <BsPlus size={20} />
        </button>
      </div>

      
      {/* Filter and Search section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Task"
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>

      {/* Tasks listed section */}
      <TodoList />

    </div>
  );
};

export default Todo;