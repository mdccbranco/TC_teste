import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ handleSearch, search, openForm, buttonLabel }) => {
  return (
    <div className="navBar d-flex">
      <SearchBar handleSearch={handleSearch} search={search} />
      <button className="option-button" type="button" onClick={openForm}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Header;
