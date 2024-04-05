import PropTypes from 'prop-types';
import { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    console.log(title);
    addTodo(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add new todo"
        style={{ marginRight: 5 }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default AddTodo;
