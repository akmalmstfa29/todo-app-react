import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from 'react-icons/ri';

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="todo">
        <div
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
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </motion.div>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todo;
