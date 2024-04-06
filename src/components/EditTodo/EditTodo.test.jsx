import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import EditTodo from '.';

test('renders EditTodo correctly', () => {
  const todo = { id: 1, title: 'Example Todo', completed: false };
  const updateTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByText, getByDisplayValue } = render(
    <EditTodo todo={todo} updateTodo={updateTodo} setEditingTodo={setEditingTodo} />
  );

  expect(getByDisplayValue('Example Todo')).toBeInTheDocument();
  expect(getByText('Update')).toBeInTheDocument();
});

test('calls updateTodo with correct title when form is submitted', () => {
  const todo = { id: 1, title: 'Example Todo', completed: false };
  const updateTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByText, getByDisplayValue } = render(
    <EditTodo todo={todo} updateTodo={updateTodo} setEditingTodo={setEditingTodo} />
  );

  fireEvent.change(getByDisplayValue('Example Todo'), { target: { value: 'Updated Todo' } });
  fireEvent.click(getByText('Update'));

  expect(updateTodo).toHaveBeenCalledWith(1, { title: 'Updated Todo' });
  expect(setEditingTodo).toHaveBeenCalledWith(null);
});

test('does not call updateTodo when form is submitted with empty title', () => {
  const todo = { id: 1, title: '', completed: false };
  const updateTodo = vi.fn();
  const setEditingTodo = vi.fn();

  const { getByText } = render(
    <EditTodo todo={todo} updateTodo={updateTodo} setEditingTodo={setEditingTodo} />
  );

  fireEvent.click(getByText('Update'));

  expect(updateTodo).not.toHaveBeenCalled();
  expect(setEditingTodo).not.toHaveBeenCalled();
});
