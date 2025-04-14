import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      className="form-control mb-3 bg-white text-white border-secondary"
      placeholder="Search expenses..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;