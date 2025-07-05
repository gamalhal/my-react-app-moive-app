import React, { useState, useEffect } from "react";
import MovieCard from "../MovieCard";
import MovieDetails from "../components/MovieDetails";
import SearchIcon from "../search.svg";
import "./Pages.css";

// متغيرات البيئة للوصول إلى API
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

/**
 * الصفحة الرئيسية - تحتوي على البحث وعرض الأفلام
 * Home Page - Contains search functionality and movie display
 */
const Home = () => {
  // حالة مصطلح البحث
  const [searchTerm, setSearchTerm] = useState("");
  // حالة قائمة الأفلام
  const [movies, setMovies] = useState([]);
  // حالة التحميل
  const [loading, setLoading] = useState(false);
  // حالة فتح تفاصيل الفيلم
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  // حالة عرض نافذة التفاصيل
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  /**
   * تحميل أفلام افتراضية عند تحميل الصفحة
   * Load default movies when page loads
   */
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  /**
   * دالة البحث عن الأفلام
   * Function to search for movies
   * @param {string} title - عنوان الفيلم للبحث عنه
   */
  const searchMovies = async (title) => {
    // التحقق من أن العنوان غير فارغ
    if (!title.trim()) return;
    
    setLoading(true);
    try {
      // جلب البيانات من API
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  /**
   * دالة معالجة الضغط على مفتاح Enter
   * Function to handle Enter key press
   * @param {Event} e - حدث الضغط على المفتاح
   */
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
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

  return (
    <div className="page-container">
      {/* قسم البحث */}
      <section className="search-section">
        <div className="search-container">
          <h2>ابحث عن أفلامك المفضلة</h2>
          <p>اكتشف آلاف الأفلام والمسلسلات من جميع أنحاء العالم</p>
          
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="ابحث عن الأفلام واضغط Enter..."
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
              className="search-icon"
            />
          </div>
        </div>
      </section>

      {/* قسم عرض الأفلام */}
      <section className="movies-section">
        {/* مؤشر التحميل */}
        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>جاري البحث...</p>
          </div>
        )}

        {/* عرض الأفلام إذا وجدت */}
        {!loading && movies?.length > 0 ? (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard 
                key={movie.imdbID} 
                movie={movie} 
                onMovieClick={handleMovieClick}
              />
            ))}
          </div>
        ) : !loading && (
          /* رسالة عدم وجود نتائج */
          <div className="empty">
            <h2>لم يتم العثور على أفلام</h2>
            <p>جرب البحث بكلمات مختلفة</p>
          </div>
        )}
      </section>

      {/* نافذة تفاصيل الفيلم */}
      <MovieDetails
        movieId={selectedMovieId}
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
      />
    </div>
  );
};

export default Home; 