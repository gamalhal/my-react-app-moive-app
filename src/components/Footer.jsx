import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <h3>MovieLand</h3>
            <p>عالم الأفلام الرائع</p>
          </div>
          <p className="footer-description">
            اكتشف أفضل الأفلام والمسلسلات من جميع أنحاء العالم. 
            موقع شامل للبحث والتصفح والاستمتاع بالمحتوى السينمائي.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>روابط سريعة</h4>
          <ul className="footer-links">
            <li><a href="/">الرئيسية</a></li>
            <li><a href="/movies">الأفلام</a></li>
            <li><a href="/series">المسلسلات</a></li>
            <li><a href="/genres">التصنيفات</a></li>
            <li><a href="/trending">الأكثر شعبية</a></li>
            <li><a href="/about">حول الموقع</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>التصنيفات</h4>
          <ul className="footer-links">
            <li><a href="/genres">أكشن</a></li>
            <li><a href="/genres">دراما</a></li>
            <li><a href="/genres">كوميدي</a></li>
            <li><a href="/genres">رعب</a></li>
            <li><a href="/genres">رومانسي</a></li>
            <li><a href="/genres">خيال علمي</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>الدعم والمساعدة</h4>
          <ul className="footer-links">
            <li><a href="/about">اتصل بنا</a></li>
            <li><a href="/about">حول الموقع</a></li>
            <li><a href="/about">سياسة الخصوصية</a></li>
            <li><a href="/about">شروط الاستخدام</a></li>
            <li><a href="/about">الأسئلة الشائعة</a></li>
            <li><a href="/about">الدعم الفني</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>النشرة البريدية</h4>
          <p>اشترك للحصول على آخر الأخبار والتحديثات</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="البريد الإلكتروني"
              className="newsletter-input"
            />
            <button className="newsletter-btn">اشتراك</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 MovieLand. جميع الحقوق محفوظة.</p>
          <div className="footer-bottom-links">
            <a href="/about">الخصوصية</a>
            <a href="/about">الشروط</a>
            <a href="/about">ملفات تعريف الارتباط</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 