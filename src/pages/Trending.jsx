import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import './Pages.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  const fetchTrendingMovies = async () => {
    setLoading(true);
    try {
      // Fetch trending movies from different years and categories
      const trendingTitles = [
        'Avengers: Endgame', 'Joker', 'Parasite', 'Black Panther', 
        'La La Land', 'The Shape of Water', 'Moonlight', 'Mad Max: Fury Road'
      ];
      const allMovies = [];

      for (const title of trendingTitles) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
        const data = await response.json();
        
        if (data.Response === "True" && data.Search) {
          allMovies.push(...data.Search.slice(0, 2)); // Take first 2 movies from each search
        }
      }

      // Remove duplicates based on imdbID
      const uniqueMovies = allMovies.filter((movie, index, self) => 
        index === self.findIndex(m => m.imdbID === movie.imdbID)
      );

      setTrendingMovies(uniqueMovies);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      setError('حدث خطأ في تحميل الأفلام الشائعة');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>جاري تحميل الأفلام الشائعة...</p>
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
        <h1>الأكثر شعبية</h1>
        <p>اكتشف الأفلام الأكثر شعبية وتقييماً</p>
      </div>

      <div className="trending-section">
        <div className="trending-intro">
          <h2>🔥 الأفلام الحالية</h2>
          <p>أفضل الأفلام التي يتحدث عنها الجميع</p>
        </div>

        <div className="movies-grid">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending; 