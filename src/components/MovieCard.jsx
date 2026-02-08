function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src="https://placehold.co/300x450/667eea/ffffff?text=Movie+Poster" 
          alt={movie.title}
        />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <div className="movie-details">
          <span className="movie-rating">⭐ {movie.vote_average}</span>
          <span className="movie-year">{movie.release_date.substring(0, 4)}</span>
        </div>
        <button className="favorite-button">♡ Add to Favorites</button>
      </div>
    </div>
  );
};
    <img
  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
  alt={movie.title}
  className="w-full h-auto rounded"
/>

export default MovieCard;

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
