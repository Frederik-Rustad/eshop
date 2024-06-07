import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(query);
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}      
      />
      <button className="btn btn-outline-dark" type="button" onClick={handleInputChange}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;