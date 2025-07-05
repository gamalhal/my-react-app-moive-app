import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <h2>MovieLand</h2>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><a href="#home" className="navbar-link active">الرئيسية</a></li>
            <li><a href="#movies" className="navbar-link">الأفلام</a></li>
            <li><a href="#series" className="navbar-link">المسلسلات</a></li>
            <li><a href="#genres" className="navbar-link">التصنيفات</a></li>
            <li><a href="#trending" className="navbar-link">الأكثر شعبية</a></li>
            <li><a href="#about" className="navbar-link">حول الموقع</a></li>
          </ul>
        </div>

        <div className="navbar-actions">
          <button className="navbar-btn primary">تسجيل الدخول</button>
          <button className="navbar-btn secondary">إنشاء حساب</button>
        </div>

        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 