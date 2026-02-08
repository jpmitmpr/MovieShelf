import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInput}
        className="border p-2 rounded"
      />
    </header>
  );
};

export default Header;
