import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <Link to="/" className="text-2xl font-bold">MovieShelf</Link>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleInput}
        className="p-2 rounded text-black w-1/3"
      />
      <Link to="/favorites" className="ml-4 underline">Favorites</Link>
    </header>
  );
};

export default Header;
