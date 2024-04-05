import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const getAllTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

const createTodo = async title => {
  try {
    const response = await axios.post(API_URL, { title, completed: false });
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    return null;
  }
};

const deleteTodo = async id => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.status === 200;
  } catch (error) {
    console.error('Error deleting todo:', error);
    return false;
  }
};

export { getAllTodos, createTodo, deleteTodo };
