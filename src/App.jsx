import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { getPopularMovies } from "./services/movieService";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getPopularMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to load movies.");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleSearch = async (query) => {
    if (!query) {
      const data = await getPopularMovies();
      setMovies(data);
      return;
    }
    try {
      setLoading(true);
      const results = await import("./services/movieService").then((module) =>
        module.searchMovies(query)
      );
      setMovies(results);
    } catch {
      setError("Failed to search movies.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<Home movies={movies} loading={loading} error={error} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
