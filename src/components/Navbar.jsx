import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/">
            <h2>MovieLand</h2>
          </Link>
        </div>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            <li><Link to="/" className={`navbar-link ${isActive('/') ? 'active' : ''}`}>الرئيسية</Link></li>
            <li><Link to="/movies" className={`navbar-link ${isActive('/movies') ? 'active' : ''}`}>الأفلام</Link></li>
            <li><Link to="/series" className={`navbar-link ${isActive('/series') ? 'active' : ''}`}>المسلسلات</Link></li>
            <li><Link to="/genres" className={`navbar-link ${isActive('/genres') ? 'active' : ''}`}>التصنيفات</Link></li>
            <li><Link to="/trending" className={`navbar-link ${isActive('/trending') ? 'active' : ''}`}>الأكثر شعبية</Link></li>
            <li><Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`}>حول الموقع</Link></li>
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