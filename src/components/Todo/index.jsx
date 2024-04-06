import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';

const Todo = ({ todo, toggleTodo, deleteTodo, setEditingTodo }) => {
  const handleEdit = () => {
    console.log(todo);
    setEditingTodo(todo);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="todo">
        <div
          data-testid="toggle-todo"
          onClick={() => toggleTodo(todo.id)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 5
          }}
        >
          {todo.completed ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
        </div>
        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'inline',
            minWidth: 400,
            maxWidth: 430,
          }}
        >
          {todo.title}
        </span>
        <div style={{ flexGrow: 1 }} />
        <div style={{ display: 'flex', flexWrap: 'nowrap', gap: 2 }}>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      </div>
    </motion.div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  setEditingTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;
