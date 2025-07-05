import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import MovieDetails from '../components/MovieDetails';
import './Pages.css';

// متغيرات البيئة للوصول إلى API
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

/**
 * صفحة المسلسلات - تعرض مجموعة من المسلسلات الشائعة
 * Series Page - Displays a collection of popular TV series
 */
const Series = () => {
  // حالة قائمة المسلسلات
  const [series, setSeries] = useState([]);
  // حالة التحميل
  const [loading, setLoading] = useState(true);
  // حالة الخطأ
  const [error, setError] = useState(null);
  // حالة فتح تفاصيل المسلسل
  const [selectedSeriesId, setSelectedSeriesId] = useState(null);
  // حالة عرض نافذة التفاصيل
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  /**
   * تحميل المسلسلات عند تحميل الصفحة
   * Load series when page loads
   */
  useEffect(() => {
    fetchPopularSeries();
  }, []);

  /**
   * دالة جلب المسلسلات الشائعة
   * Function to fetch popular TV series
   */
  const fetchPopularSeries = async () => {
    setLoading(true);
    try {
      // قائمة بأسماء المسلسلات الشائعة للبحث عنها
      const popularTitles = ['Breaking Bad', 'Game of Thrones', 'Friends', 'The Office', 'Stranger Things'];
      const allSeries = [];

      // البحث عن كل عنوان وجمع النتائج
      for (const title of popularTitles) {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&type=series`);
        const data = await response.json();
        
        if (data.Response === "True" && data.Search) {
          allSeries.push(...data.Search.slice(0, 3)); // أخذ أول 3 مسلسلات من كل بحث
        }
      }

      // إزالة المسلسلات المكررة بناءً على معرف IMDB
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

  /**
   * دالة فتح تفاصيل المسلسل
   * Function to open series details
   * @param {string} seriesId - معرف المسلسل
   */
  const handleSeriesClick = (seriesId) => {
    setSelectedSeriesId(seriesId);
    setIsDetailsOpen(true);
  };

  /**
   * دالة إغلاق تفاصيل المسلسل
   * Function to close series details
   */
  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedSeriesId(null);
  };

  // عرض حالة التحميل
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
        <h1>المسلسلات</h1>
        <p>اكتشف أفضل المسلسلات التلفزيونية من جميع أنحاء العالم</p>
      </div>

      {/* شبكة المسلسلات */}
      <div className="movies-grid">
        {series.map((series) => (
          <MovieCard 
            key={series.imdbID} 
            movie={series} 
            onMovieClick={handleSeriesClick}
          />
        ))}
      </div>

      {/* نافذة تفاصيل المسلسل */}
      <MovieDetails
        movieId={selectedSeriesId}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
};

export default Series; 