import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import './Pages.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPopularSeries();
  }, []);

  const fetchPopularSeries = async () => {
    setLoading(true);
    try {
      // Fetch popular TV series
      const popularSeries = ['Breaking Bad', 'Game of Thrones', 'Friends', 'The Office', 'Stranger Things'];
      const allSeries = [];

      for (const title of popularSeries) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&type=series`);
        const data = await response.json();
        
        if (data.Response === "True" && data.Search) {
          allSeries.push(...data.Search.slice(0, 3)); // Take first 3 series from each search
        }
      }

      // Remove duplicates based on imdbID
      const uniqueSeries = allSeries.filter((series, index, self) => 
        index === self.findIndex(s => s.imdbID === series.imdbID)
      );

      setSeries(uniqueSeries);
    } catch (error) {
      console.error('Error fetching series:', error);
      setError('حدث خطأ في تحميل المسلسلات');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>جاري تحميل المسلسلات...</p>
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
        <h1>المسلسلات</h1>
        <p>اكتشف أفضل المسلسلات التلفزيونية</p>
      </div>

      <div className="movies-grid">
        {series.map((series) => (
          <MovieCard key={series.imdbID} movie={series} />
        ))}
      </div>
    </div>
  );
};

export default Series; 