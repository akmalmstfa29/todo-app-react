import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { createTodo, deleteTodo, getAllTodos } from './services/todoService';
import AddTodo from './components/AddTodo';

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

  const addTodo = async title => {
    const newTodo = await createTodo(title);
    if (newTodo) {
      setTodos([newTodo, ...todos]);
      setFilteredTodos([ newTodo,...todos]);
    }
  };

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
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        toggleTodo={() => {}}
        deleteTodo={deleteOneTodo}
      />
    </div>
  );
}

export default App;
