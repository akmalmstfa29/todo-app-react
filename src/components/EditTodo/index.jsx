import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

const EditTodo = ({ todo, updateTodo, setEditingTodo }) => {
  const [data, setData] = useState(todo);
  const [title, setTitle] = useState(todo.title);

  useEffect(() => {
    setData(todo);
    setTitle(todo.title);
  }, [todo])

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    updateTodo(data.id, { title: title });
    setEditingTodo(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ flexBasis: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, }}>
      <textarea type="title" value={title} onChange={e => setTitle(e.target.value)} style={{ minWidth: 250, minHeight: 100 }} />
      <button type="submit">Update</button>
    </form>
  );
};

EditTodo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  updateTodo: PropTypes.func.isRequired,
  setEditingTodo: PropTypes.func.isRequired
};

export default EditTodo;
