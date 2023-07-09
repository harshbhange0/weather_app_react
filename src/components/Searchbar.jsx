import React, { useState } from "react";

function Searchbar({ onChange, btnClick }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const text = event.target.value;
    setInputValue(text); // Update the input value
    onChange(text);
  };

  const handleButtonClick = () => {
    btnClick();
    setInputValue(""); // Clear the input value
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      btnClick();
      setInputValue(""); // Clear the input value
    }
  };

  return (
    <div className="search_holder">
      <input
        placeholder="Enter Any City"
        value={inputValue} 
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
