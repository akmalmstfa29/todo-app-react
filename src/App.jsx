import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { getAllTodos } from './services/todoService';

function App() {
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const allTodos = await getAllTodos();
      setFilteredTodos(allTodos);
    };
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList
        todos={filteredTodos}
        toggleTodo={() => {}}
        deleteTodo={() => {}}
      />
    </div>
  );
}

export default App;
