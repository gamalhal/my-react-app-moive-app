import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import MovieDetails from '../components/MovieDetails';
import './Pages.css';

// متغيرات البيئة للوصول إلى API
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

/**
 * صفحة التصنيفات - تعرض أفلام من تصنيفات مختلفة
 * Genres Page - Displays movies from different genres
 */
const Genres = () => {
  // حالة قائمة الأفلام
  const [movies, setMovies] = useState([]);
  // حالة التحميل
  const [loading, setLoading] = useState(true);
  // حالة الخطأ
  const [error, setError] = useState(null);
  // حالة التصنيف المحدد
  const [selectedGenre, setSelectedGenre] = useState('Action');
  // حالة فتح تفاصيل الفيلم
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  // حالة عرض نافذة التفاصيل
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // قائمة التصنيفات المتاحة
  const genres = [
    { name: 'Action', keywords: ['action', 'adventure', 'superhero'] },
    { name: 'Drama', keywords: ['drama', 'romance', 'family'] },
    { name: 'Comedy', keywords: ['comedy', 'funny', 'humor'] },
    { name: 'Horror', keywords: ['horror', 'thriller', 'scary'] },
    { name: 'Sci-Fi', keywords: ['sci-fi', 'science fiction', 'space'] },
    { name: 'Animation', keywords: ['animation', 'animated', 'cartoon'] }
  ];

  /**
   * تحميل الأفلام عند تحميل الصفحة
   * Load movies when page loads
   */
  useEffect(() => {
    fetchMoviesByGenre(selectedGenre);
  }, [selectedGenre]);

  /**
   * دالة جلب الأفلام حسب التصنيف
   * Function to fetch movies by genre
   * @param {string} genre - التصنيف المطلوب
   */
  const fetchMoviesByGenre = async (genre) => {
    setLoading(true);
    try {
      // البحث عن التصنيف في القائمة
      const genreData = genres.find(g => g.name === genre);
      if (!genreData) return;

      const allMovies = [];

      // البحث باستخدام الكلمات المفتاحية للتصنيف
      for (const keyword of genreData.keywords) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${keyword}`);
        const data = await response.json();
        
        if (data.Response === "True" && data.Search) {
          allMovies.push(...data.Search.slice(0, 2)); // أخذ أول فيلمين من كل بحث
        }
      }

      // إزالة الأفلام المكررة بناءً على معرف IMDB
      const uniqueMovies = allMovies.filter((movie, index, self) => 
        index === self.findIndex(m => m.imdbID === movie.imdbID)
      );

      setMovies(uniqueMovies);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      setError('حدث خطأ في تحميل الأفلام');
    } finally {
      setLoading(false);
    }
  };

  /**
   * دالة تغيير التصنيف
   * Function to change genre
   * @param {string} genre - التصنيف الجديد
   */
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
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
        <h1>التصنيفات</h1>
        <p>اكتشف الأفلام حسب التصنيف المفضل لديك</p>
      </div>

      {/* أزرار التصنيفات */}
      <div className="genres-buttons">
        {genres.map((genre) => (
          <button
            key={genre.name}
            className={`genre-btn ${selectedGenre === genre.name ? 'active' : ''}`}
            onClick={() => handleGenreChange(genre.name)}
          >
            {genre.name}
          </button>
        ))}
      </div>

      {/* عنوان التصنيف المحدد */}
      <div className="selected-genre">
        <h2>أفلام {selectedGenre}</h2>
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

export default Genres; 