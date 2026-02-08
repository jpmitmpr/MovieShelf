import React, { useState, useEffect } from "react";

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((m) => m.id === movie.id));
  }, [movie.id]);

  const handleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.find((m) => m.id === movie.id)) {
      favorites = favorites.filter((m) => m.id !== movie.id);
    } else {
      favorites.push(movie);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-gray-200 rounded p-2 m-2 w-48">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded"
      />
      <h3 className="font-bold mt-2">{movie.title}</h3>
      <button
        onClick={handleFavorite}
        className={`mt-1 px-2 py-1 rounded ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-500 text-white"
        }`}
      >
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
};

export default MovieCard;
