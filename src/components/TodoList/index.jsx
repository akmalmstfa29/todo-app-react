import PropTypes from 'prop-types';
import React from 'react';
import Todo from '../Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo, setEditingTodo }) => {
  return (
    <div className="todo-list" style={{ flexBasis: '50%' }}>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  setEditingTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
