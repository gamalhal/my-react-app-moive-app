import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import MovieDetails from '../components/MovieDetails';
import './Pages.css';

// متغيرات البيئة للوصول إلى API
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

/**
 * صفحة الأفلام - تعرض مجموعة من الأفلام الشائعة
 * Movies Page - Displays a collection of popular movies
 */
const Movies = () => {
  // حالة قائمة الأفلام
  const [movies, setMovies] = useState([]);
  // حالة التحميل
  const [loading, setLoading] = useState(true);
  // حالة الخطأ
  const [error, setError] = useState(null);
  // حالة فتح تفاصيل الفيلم
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  // حالة عرض نافذة التفاصيل
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  /**
   * تحميل الأفلام عند تحميل الصفحة
   * Load movies when page loads
   */
  useEffect(() => {
    fetchPopularMovies();
  }, []);

  /**
   * دالة جلب الأفلام الشائعة
   * Function to fetch popular movies
   */
  const fetchPopularMovies = async () => {
    setLoading(true);
    try {
      // قائمة بأسماء الأفلام الشائعة للبحث عنها
      const popularTitles = ['Batman', 'Avengers', 'Spider-Man', 'Iron Man', 'Superman'];
      const allMovies = [];

      // البحث عن كل عنوان وجمع النتائج
      for (const title of popularTitles) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
        const data = await response.json();
        
        if (data.Response === "True" && data.Search) {
          allMovies.push(...data.Search.slice(0, 3)); // أخذ أول 3 أفلام من كل بحث
        }
      }

      // إزالة الأفلام المكررة بناءً على معرف IMDB
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

  /**
   * دالة فتح تفاصيل الفيلم
   * Function to open movie details
   * @param {string} movieId - معرف الفيلم
   */
  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
    setIsDetailsOpen(true);
  };

  /**
   * دالة إغلاق تفاصيل الفيلم
   * Function to close movie details
   */
  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedMovieId(null);
  };

  // عرض حالة التحميل
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

  // عرض حالة الخطأ
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
      {/* رأس الصفحة */}
      <div className="page-header">
        <h1>الأفلام</h1>
        <p>اكتشف أفضل الأفلام من جميع أنحاء العالم</p>
      </div>

      {/* شبكة الأفلام */}
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.imdbID} 
            movie={movie} 
            onMovieClick={handleMovieClick}
          />
        ))}
      </div>

      {/* نافذة تفاصيل الفيلم */}
      <MovieDetails
        movieId={selectedMovieId}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
};

export default Movies; 