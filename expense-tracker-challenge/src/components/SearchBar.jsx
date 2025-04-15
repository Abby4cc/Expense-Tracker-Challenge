import React from 'react';

function SearchBar({ onSearch }) {
  return (
    <div className="d-flex justify-content-center">
      <input
        type="text"
        className="form-control mb-3 bg-white text-dark border-secondary"
        placeholder="Search expenses..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
