import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import SearchBar from '.';

test('renders SearchBar correctly', () => {
  const handleSearch = vi.fn();

  const { getByPlaceholderText } = render(<SearchBar handleSearch={handleSearch} />);

  expect(getByPlaceholderText('Search todos')).toBeInTheDocument();
});

test('calls handleSearch with correct query when input value changes', () => {
  const handleSearch = vi.fn();

  const { getByPlaceholderText } = render(<SearchBar handleSearch={handleSearch} />);

  fireEvent.change(getByPlaceholderText('Search todos'), { target: { value: 'search query' } });

  expect(handleSearch).toHaveBeenCalledWith('search query');
});
