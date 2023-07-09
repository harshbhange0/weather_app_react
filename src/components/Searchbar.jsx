import React from "react";

function Searchbar({ onChange, btnClick }) {
  const handleChange = (event) => {
    const text = event.target.value;
    onChange(text);
  };

  const handleButtonClick = () => {
    btnClick();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      btnClick();
    }
  };

  return (
    <div className="search_holder">
      <input
        placeholder="Enter Any City"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        type="text"
        className="search_input"
      />
      <i className="bi bi-search search_btn" onClick={handleButtonClick}></i>
    </div>
  );
}

export default Searchbar;

