import React from "react";
import "./SearchPanel.css";

const SearchPanel = () => {
  const searchText = "Поиск";
  return (
    <input className="form-control search-input" placeholder={searchText} />
  );
};

export default SearchPanel;
