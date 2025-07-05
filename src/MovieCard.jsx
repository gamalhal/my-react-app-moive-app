import React from 'react';

/**
 * مكون بطاقة الفيلم - يعرض معلومات مختصرة عن الفيلم مع إمكانية فتح التفاصيل
 * Movie Card Component - Displays brief movie information with ability to open details
 * 
 * @param {Object} props - خصائص المكون
 * @param {Object} props.movie - بيانات الفيلم
 * @param {string} props.movie.imdbID - معرف الفيلم الفريد
 * @param {string} props.movie.Year - سنة إنتاج الفيلم
 * @param {string} props.movie.Poster - رابط صورة الفيلم
 * @param {string} props.movie.Title - عنوان الفيلم
 * @param {string} props.movie.Type - نوع المحتوى (فيلم، مسلسل، إلخ)
 * @param {Function} props.onMovieClick - دالة استدعاء عند الضغط على الفيلم
 */
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type }, onMovieClick }) => {
  /**
   * دالة معالجة الضغط على الفيلم
   * Function to handle movie click
   */
  const handleClick = () => {
    if (onMovieClick) {
      onMovieClick(imdbID);
    }
  };

  return (
    <div 
      className="movie" 
      key={imdbID}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
      title="اضغط لعرض التفاصيل"
    >
      {/* سنة الإنتاج */}
      <div>
        <p>{Year}</p>
      </div>

      {/* صورة الفيلم */}
      <div>
        <img 
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} 
          alt={Title} 
        />
      </div>

      {/* معلومات الفيلم الأساسية */}
      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;