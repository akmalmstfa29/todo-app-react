import React from 'react';
import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import TodoList from '.';

test('renders TodoList correctly', () => {
  const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true }
  ];
  const toggleTodo = vi.fn();
  const deleteTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByText } = render(
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
  );

  expect(getByText('Todo 1')).toBeInTheDocument();
  expect(getByText('Todo 2')).toBeInTheDocument();
});

test('calls toggleTodo, deleteTodo, and setEditingTodo with correct arguments', () => {
  const todos = [
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: true }
  ];
  const toggleTodo = vi.fn();
  const deleteTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getAllByText, getAllByTestId } = render(
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
  );

  expect(toggleTodo).toHaveBeenCalledTimes(0);
  expect(deleteTodo).toHaveBeenCalledTimes(0);
  expect(setEditingTodo).toHaveBeenCalledTimes(0);

  getAllByTestId('toggle-todo')[0].click();

  expect(toggleTodo).toHaveBeenCalledWith(1);
  expect(deleteTodo).toHaveBeenCalledTimes(0);
  expect(setEditingTodo).toHaveBeenCalledTimes(0);

  getAllByText('Delete')[0].click();

  expect(deleteTodo).toHaveBeenCalledWith(1);
  expect(setEditingTodo).toHaveBeenCalledTimes(0);

  getAllByText('Edit')[0].click();

  expect(setEditingTodo).toHaveBeenCalledWith(todos[0]);
});
