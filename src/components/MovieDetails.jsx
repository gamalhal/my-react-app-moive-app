import React, { useState, useEffect, useCallback } from 'react';
import './MovieDetails.css';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

/**
 * مكون تفاصيل الفيلم - يعرض معلومات شاملة عن الفيلم المحدد
 * Movie Details Component - Displays comprehensive information about the selected movie
 * 
 * @param {Object} props - خصائص المكون
 * @param {string} props.movieId - معرف الفيلم من OMDB
 * @param {boolean} props.isOpen - حالة فتح/إغلاق النافذة
 * @param {Function} props.onClose - دالة إغلاق النافذة
 */
const MovieDetails = ({ movieId, isOpen, onClose }) => {
  // حالة بيانات الفيلم التفصيلية
  const [movieDetails, setMovieDetails] = useState(null);
  // حالة التحميل
  const [loading, setLoading] = useState(false);
  // حالة الخطأ
  const [error, setError] = useState(null);

  /**
   * دالة جلب تفاصيل الفيلم
   * Function to fetch movie details
   */
  const fetchMovieDetails = useCallback(async () => {
    if (!movieId) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // جلب البيانات التفصيلية للفيلم
      const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${movieId}&plot=full`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovieDetails(data);
      } else {
        setError('لم يتم العثور على تفاصيل الفيلم');
      }
    } catch (error) {
      console.error('خطأ في جلب تفاصيل الفيلم:', error);
      setError('حدث خطأ في تحميل تفاصيل الفيلم');
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  /**
   * جلب تفاصيل الفيلم من API
   * Fetch movie details from API
   */
  useEffect(() => {
    if (isOpen && movieId) {
      fetchMovieDetails();
    }
  }, [isOpen, movieId, fetchMovieDetails]);

  /**
   * دالة إغلاق النافذة
   * Function to close the modal
   */
  const handleClose = () => {
    setMovieDetails(null);
    setError(null);
    onClose();
  };

  /**
   * دالة إغلاق النافذة عند الضغط على الخلفية
   * Function to close modal when clicking on background
   */
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  // إذا لم تكن النافذة مفتوحة، لا تعرض شيئاً
  if (!isOpen) return null;

  return (
    <div className="movie-details-overlay" onClick={handleBackdropClick}>
      <div className="movie-details-modal">
        {/* زر الإغلاق */}
        <button className="close-btn" onClick={handleClose}>
          <i className="fas fa-times"></i>
        </button>

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>جاري تحميل تفاصيل الفيلم...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <h3>خطأ</h3>
            <p>{error}</p>
            <button onClick={handleClose}>إغلاق</button>
          </div>
        )}

        {movieDetails && (
          <div className="movie-details-content">
            {/* رأس التفاصيل مع الصورة والعنوان */}
            <div className="movie-header">
              <div className="movie-poster">
                <img 
                  src={movieDetails.Poster !== "N/A" ? movieDetails.Poster : "https://via.placeholder.com/300x450?text=No+Poster"} 
                  alt={movieDetails.Title}
                />
              </div>
              <div className="movie-info">
                <h2>{movieDetails.Title}</h2>
                <div className="movie-meta">
                  <span className="year">{movieDetails.Year}</span>
                  <span className="runtime">{movieDetails.Runtime}</span>
                  <span className="rating">{movieDetails.imdbRating}/10 ⭐</span>
                </div>
                <div className="movie-genre">
                  <span>{movieDetails.Genre}</span>
                </div>
                <div className="movie-director">
                  <strong>المخرج:</strong> {movieDetails.Director}
                </div>
                <div className="movie-writer">
                  <strong>الكاتب:</strong> {movieDetails.Writer}
                </div>
                <div className="movie-actors">
                  <strong>الطاقم:</strong> {movieDetails.Actors}
                </div>
              </div>
            </div>

            {/* تفاصيل إضافية */}
            <div className="movie-details-grid">
              <div className="detail-item">
                <h4>📅 تاريخ الإصدار</h4>
                <p>{movieDetails.Released}</p>
              </div>
              <div className="detail-item">
                <h4>🌍 البلد</h4>
                <p>{movieDetails.Country}</p>
              </div>
              <div className="detail-item">
                <h4>💬 اللغة</h4>
                <p>{movieDetails.Language}</p>
              </div>
              <div className="detail-item">
                <h4>🏆 الجوائز</h4>
                <p>{movieDetails.Awards !== "N/A" ? movieDetails.Awards : "لا توجد جوائز"}</p>
              </div>
              <div className="detail-item">
                <h4>📊 التقييمات</h4>
                <div className="ratings">
                  {movieDetails.Ratings && movieDetails.Ratings.map((rating, index) => (
                    <div key={index} className="rating-item">
                      <span className="rating-source">{rating.Source}</span>
                      <span className="rating-value">{rating.Value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="detail-item">
                <h4>💰 الإيرادات</h4>
                <p>{movieDetails.BoxOffice !== "N/A" ? movieDetails.BoxOffice : "غير متوفر"}</p>
              </div>
            </div>

            {/* القصة */}
            <div className="movie-plot">
              <h3>📖 القصة</h3>
              <p>{movieDetails.Plot}</p>
            </div>

            {/* معلومات تقنية */}
            <div className="movie-technical">
              <h3>🔧 المعلومات التقنية</h3>
              <div className="technical-grid">
                <div className="tech-item">
                  <strong>النوع:</strong> {movieDetails.Type}
                </div>
                <div className="tech-item">
                  <strong>IMDB ID:</strong> {movieDetails.imdbID}
                </div>
                <div className="tech-item">
                  <strong>DVD:</strong> {movieDetails.DVD !== "N/A" ? movieDetails.DVD : "غير متوفر"}
                </div>
                <div className="tech-item">
                  <strong>الإنتاج:</strong> {movieDetails.Production !== "N/A" ? movieDetails.Production : "غير متوفر"}
                </div>
              </div>
            </div>

            {/* أزرار إضافية */}
            <div className="movie-actions">
              <button className="action-btn primary">
                <i className="fas fa-heart"></i>
                إضافة للمفضلة
              </button>
              <button className="action-btn secondary">
                <i className="fas fa-share"></i>
                مشاركة
              </button>
              <a 
                href={`https://www.imdb.com/title/${movieDetails.imdbID}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="action-btn external"
              >
                <i className="fab fa-imdb"></i>
                عرض على IMDB
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails; 