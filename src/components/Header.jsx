import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>MovieLand</h1>
          <span className="tagline">عالم الأفلام الرائع</span>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li><a href="#home" className="nav-link active">الرئيسية</a></li>
            <li><a href="#movies" className="nav-link">الأفلام</a></li>
            <li><a href="#series" className="nav-link">المسلسلات</a></li>
            <li><a href="#genres" className="nav-link">التصنيفات</a></li>
            <li><a href="#about" className="nav-link">حول الموقع</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn-primary">تسجيل الدخول</button>
          <button className="btn-secondary">إنشاء حساب</button>
        </div>
      </div>

      <div className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">اكتشف عالم الأفلام</h2>
          <p className="hero-description">
            ابحث عن أفضل الأفلام والمسلسلات من جميع أنحاء العالم
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">+50K</span>
              <span className="stat-label">فيلم</span>
            </div>
            <div className="stat">
              <span className="stat-number">+10K</span>
              <span className="stat-label">مسلسل</span>
            </div>
            <div className="stat">
              <span className="stat-number">+1M</span>
              <span className="stat-label">مستخدم</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            <div className="card card-1"></div>
            <div className="card card-2"></div>
            <div className="card card-3"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 