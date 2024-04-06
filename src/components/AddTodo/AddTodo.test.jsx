import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import AddTodo from '.';

test('renders AddTodo correctly', () => {
  const addTodo = vi.fn();

  const { getByPlaceholderText, getByText } = render(<AddTodo addTodo={addTodo} />);

  expect(getByPlaceholderText('Add new todo')).toBeInTheDocument();
  expect(getByText('Add')).toBeInTheDocument();
});

test('calls addTodo with correct title when form is submitted', () => {
  const addTodo = vi.fn();

  const { getByText, getByPlaceholderText } = render(<AddTodo addTodo={addTodo} />);

  fireEvent.change(getByPlaceholderText('Add new todo'), { target: { value: 'New Todo' } });
  fireEvent.click(getByText('Add'));

  expect(addTodo).toHaveBeenCalledWith('New Todo');
});

test('does not call addTodo when form is submitted with empty title', () => {
  const addTodo = vi.fn();

  const { getByText } = render(<AddTodo addTodo={addTodo} />);

  fireEvent.click(getByText('Add'));

  expect(addTodo).not.toHaveBeenCalled();
});
