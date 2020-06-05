import React from "react";

import "./SearchBar.css";

const SearchBar = ({search, handleSearch}) => {
  return (
    <input
      className="input-search"
      type="text"
      name="search"
      placeholder="Procure por um veículo"
      value={search}
      onChange={(e) => handleSearch(e)}
    />
  );
};

export default SearchBar;
