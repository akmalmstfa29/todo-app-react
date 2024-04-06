import PropTypes from 'prop-types';
import React, { useState } from 'react';

const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search todos"
      value={query}
      onChange={handleChange}
    />
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;
