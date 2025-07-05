import React, { useState, useEffect } from 'react';
import MovieCard from '../MovieCard';
import MovieDetails from '../components/MovieDetails';
import './Pages.css';

// متغيرات البيئة للوصول إلى API
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

/**
 * صفحة الترند - تعرض الأفلام والمسلسلات الشائعة حالياً
 * Trending Page - Displays currently popular movies and TV series
 */
const Trending = () => {
  // حالة قائمة المحتوى الشائع
  const [trending, setTrending] = useState([]);
  // حالة التحميل
  const [loading, setLoading] = useState(true);
  // حالة الخطأ
  const [error, setError] = useState(null);
  // حالة فتح تفاصيل المحتوى
  const [selectedItemId, setSelectedItemId] = useState(null);
  // حالة عرض نافذة التفاصيل
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  /**
   * تحميل المحتوى الشائع عند تحميل الصفحة
   * Load trending content when page loads
   */
  useEffect(() => {
    fetchTrendingContent();
  }, []);

  /**
   * دالة جلب المحتوى الشائع
   * Function to fetch trending content
   */
  const fetchTrendingContent = async () => {
    setLoading(true);
    try {
      // قائمة بأسماء المحتوى الشائع حالياً
      const trendingTitles = [
        'Marvel', 'DC', 'Star Wars', 'Harry Potter', 'Lord of the Rings',
        'The Walking Dead', 'Breaking Bad', 'Game of Thrones', 'Stranger Things'
      ];
      const allContent = [];

      // البحث عن كل عنوان وجمع النتائج
      for (const title of trendingTitles) {
        // البحث في الأفلام
        const movieResponse = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&type=movie`);
        const movieData = await movieResponse.json();
        
        if (movieData.Response === "True" && movieData.Search) {
          allContent.push(...movieData.Search.slice(0, 2)); // أخذ أول فيلمين من كل بحث
        }

        // البحث في المسلسلات
        const seriesResponse = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}&type=series`);
        const seriesData = await seriesResponse.json();
        
        if (seriesData.Response === "True" && seriesData.Search) {
          allContent.push(...seriesData.Search.slice(0, 2)); // أخذ أول مسلسلين من كل بحث
        }
      }

      // إزالة المحتوى المكرر بناءً على معرف IMDB
      const uniqueContent = allContent.filter((item, index, self) => 
        index === self.findIndex(i => i.imdbID === item.imdbID)
      );

      // ترتيب المحتوى عشوائياً لمحاكاة الترند
      const shuffledContent = uniqueContent.sort(() => Math.random() - 0.5);

      setTrending(shuffledContent);
    } catch (error) {
      console.error('Error fetching trending content:', error);
      setError('حدث خطأ في تحميل المحتوى الشائع');
    } finally {
      setLoading(false);
    }
  };

  /**
   * دالة فتح تفاصيل المحتوى
   * Function to open content details
   * @param {string} itemId - معرف المحتوى
   */
  const handleItemClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsDetailsOpen(true);
  };

  /**
   * دالة إغلاق تفاصيل المحتوى
   * Function to close content details
   */
  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedItemId(null);
  };

  // عرض حالة التحميل
  if (loading) {
    return (
      <div className="page-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>جاري تحميل المحتوى الشائع...</p>
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
        <h1>الترند</h1>
        <p>اكتشف المحتوى الأكثر شعبية حالياً</p>
      </div>

      {/* إحصائيات سريعة */}
      <div className="trending-stats">
        <div className="stat-item">
          <span className="stat-number">{trending.length}</span>
          <span className="stat-label">عنوان شائع</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{trending.filter(item => item.Type === 'movie').length}</span>
          <span className="stat-label">فيلم</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{trending.filter(item => item.Type === 'series').length}</span>
          <span className="stat-label">مسلسل</span>
        </div>
      </div>

      {/* شبكة المحتوى الشائع */}
      <div className="movies-grid">
        {trending.map((item) => (
          <MovieCard 
            key={item.imdbID} 
            movie={item} 
            onMovieClick={handleItemClick}
          />
        ))}
      </div>

      {/* نافذة تفاصيل المحتوى */}
      <MovieDetails
        movieId={selectedItemId}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
};

export default Trending; 