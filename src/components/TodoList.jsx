import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
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
  deleteTodo: PropTypes.func.isRequired
};

export default TodoList;
