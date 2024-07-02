import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const filteredTodos = useSelector((state) => {
    const tasks = state.tasks;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase(); // Convert search term to lowercase for case-insensitive search

    return tasks.filter((task) => {
      const matchesFilter = (filter === 'COMPLETED' && task.completed) ||
        (filter === 'INCOMPLETE' && !task.completed) ||
        filter === 'ALL';

      const matchesSearch = task.text.toLowerCase().includes(searchTerm);

      return matchesFilter && matchesSearch;
    });
  });

  console.log('Filtered Todos:', filteredTodos);

  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filteredTodos.map((task, index) => (
        <TodoItem key={index} task={task} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;