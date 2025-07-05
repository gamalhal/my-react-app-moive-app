import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import './Pages.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

const Genres = () => {
  const [selectedGenre, setSelectedGenre] = useState('action');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const genres = [
    { id: 'action', name: 'أكشن', keywords: ['action', 'adventure', 'superhero'] },
    { id: 'drama', name: 'دراما', keywords: ['drama', 'romance', 'family'] },
    { id: 'comedy', name: 'كوميدي', keywords: ['comedy', 'funny', 'humor'] },
    { id: 'horror', name: 'رعب', keywords: ['horror', 'thriller', 'scary'] },
    { id: 'sci-fi', name: 'خيال علمي', keywords: ['sci-fi', 'science fiction', 'space'] },
    { id: 'romance', name: 'رومانسي', keywords: ['romance', 'love', 'romantic'] }
  ];

  useEffect(() => {
    fetchMoviesByGenre(selectedGenre);
  }, [selectedGenre]);

  const fetchMoviesByGenre = async (genreId) => {
    setLoading(true);
    const genre = genres.find(g => g.id === genreId);
    const allMovies = [];

    try {
      for (const keyword of genre.keywords) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${keyword}`);
        const data = await response.json();
        
        if (data.Response === "True" && data.Search) {
          allMovies.push(...data.Search.slice(0, 2)); // Take first 2 movies from each keyword
        }
      }

      // Remove duplicates based on imdbID
      const uniqueMovies = allMovies.filter((movie, index, self) => 
        index === self.findIndex(m => m.imdbID === movie.imdbID)
      );

      setMovies(uniqueMovies);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>التصنيفات</h1>
        <p>اكتشف الأفلام حسب التصنيف المفضل لديك</p>
      </div>

      <div className="genres-filter">
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`genre-btn ${selectedGenre === genre.id ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>جاري تحميل الأفلام...</p>
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Genres; 