import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { expect, test, vi } from 'vitest';
import Todo from '.';

test('renders todo correctly', () => {
  const todo = { id: 1, title: 'Example Todo', completed: false };
  const toggleTodo = vi.fn();
  const deleteTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByText } = render(
    <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
  );

  expect(getByText('Example Todo')).toBeInTheDocument();
});

test('calls toggleTodo when clicking todo', () => {
  const todo = { id: 1, title: 'Example Todo', completed: false };
  const toggleTodo = vi.fn();
  const deleteTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByTestId } = render(
    <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
  );

  fireEvent.click(getByTestId('toggle-todo'));
  expect(toggleTodo).toHaveBeenCalledWith(1);
});

test('calls deleteTodo when clicking delete button', async () => {
  const todo = { id: 1, title: 'Example Todo', completed: false };
  const toggleTodo = vi.fn();
  const deleteTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByText } = render(
    <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
  );

  fireEvent.click(getByText('Delete'));
  expect(deleteTodo).toHaveBeenCalledWith(1);
});

test('calls setEditingTodo when clicking edit button', () => {
  const todo = { id: 1, title: 'Example Todo', completed: false };
  const toggleTodo = vi.fn();
  const deleteTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByText } = render(
    <Todo todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setEditingTodo={setEditingTodo} />
  );

  fireEvent.click(getByText('Edit'));
  expect(setEditingTodo).toHaveBeenCalledWith(todo);
});
