import React from "react";
import MovieGrid from "../components/MovieGrid";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Home = ({ movies, loading, error }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  return <MovieGrid movies={movies} />;
};

export default Home;
