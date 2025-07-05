import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import './Pages.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      // Fetch multiple popular movies
      const popularTitles = ['Batman', 'Avengers', 'Spider-Man', 'Iron Man', 'Superman'];
      const allMovies = [];

      for (const title of popularTitles) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
        const data = await response.json();
        
        if (data.Response === "True" && data.Search) {
          allMovies.push(...data.Search.slice(0, 3)); // Take first 3 movies from each search
        }
      }

      // Remove duplicates based on imdbID
      const uniqueMovies = allMovies.filter((movie, index, self) => 
        index === self.findIndex(m => m.imdbID === movie.imdbID)
      );

      setMovies(uniqueMovies);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setError('حدث خطأ في تحميل الأفلام');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>جاري تحميل الأفلام...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page-container">
        <div className="error">
          <h2>خطأ</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>الأفلام</h1>
        <p>اكتشف أفضل الأفلام من جميع أنحاء العالم</p>
      </div>

      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies; 