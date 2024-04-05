import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const getAllTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.map(todo => ({...todo, text: todo.title}));
  } catch (error) {
    console.error('Error fetching todos:', error);
    return [];
  }
};

export { getAllTodos };
