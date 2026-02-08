import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies }) => {
  if (!movies || movies.length === 0) return <div>No movies found.</div>;

  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
