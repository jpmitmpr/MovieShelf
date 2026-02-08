import React, { useEffect, useState } from "react";
import MovieGrid from "../components/MovieGrid";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setMovies(favorites);
  }, []);

  return <MovieGrid movies={movies} />;
};

export default Favorites;
