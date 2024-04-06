import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import { createTodo, deleteTodo, getAllTodos, updateTodo } from './services/todoService';
import AddTodo from './components/AddTodo';
import EditTodo from './components/EditTodo';
import SearchBar from './components/SearchBar';

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

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

  const toggleTodo = async id => {
    await updateTodo(id, { completed: !todos.find(todo => todo.id === id).completed });
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  const deleteOneTodo = async id => {
    const isDeleted = await deleteTodo(id);
    if (isDeleted) {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
      setFilteredTodos(updatedTodos);
    }
  };

  const updateOneTodo = async (id, updates) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    await updateTodo(id, updates);
  };

  const handleSearch = query => {
    const filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
            <SearchBar handleSearch={handleSearch} />
            <AddTodo addTodo={addTodo} />
          </div>
          <TodoList
            todos={filteredTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteOneTodo}
            setEditingTodo={setEditingTodo}
          />
        </div>

        {editingTodo && (
          <EditTodo
            todo={editingTodo}
            updateTodo={updateOneTodo}
            setEditingTodo={setEditingTodo}
          />
        )}
      </div>
    </div>
  );
}

export default App;
