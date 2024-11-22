import React from "react";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Пошук по імені ..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{ padding: "10px", marginBottom: "20px", width: "100%" }}
    />
  );
};

export default SearchBar;
