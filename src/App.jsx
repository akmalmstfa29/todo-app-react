import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { deleteTodo, getAllTodos } from './services/todoService';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const allTodos = await getAllTodos();
      setTodos(allTodos);
      setFilteredTodos(allTodos);
    };
    fetchTodos();
  }, []);

  const deleteOneTodo = async id => {
    const isDeleted = await deleteTodo(id);
    if (isDeleted) {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
      setFilteredTodos(updatedTodos);
    }
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoList
        todos={filteredTodos}
        toggleTodo={() => {}}
        deleteTodo={deleteOneTodo}
      />
    </div>
  );
}

export default App;
