import React from 'react';
import './Pages.css';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>حول الموقع</h1>
        <p>تعرف على MovieLand وعالم الأفلام الرائع</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>🎬 من نحن</h2>
          <p>
            MovieLand هو موقع شامل للبحث والتصفح في عالم الأفلام والمسلسلات. 
            نقدم لك تجربة فريدة لاكتشاف أفضل المحتويات السينمائية من جميع أنحاء العالم.
          </p>
        </div>

        <div className="about-section">
          <h2>🌟 مميزاتنا</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>🔍 بحث متقدم</h3>
              <p>ابحث عن أي فيلم أو مسلسل بسهولة وسرعة</p>
            </div>
            <div className="feature">
              <h3>📱 تصميم متجاوب</h3>
              <p>استمتع بالتصفح على جميع الأجهزة</p>
            </div>
            <div className="feature">
              <h3>🎯 تصنيفات متنوعة</h3>
              <p>اكتشف المحتوى حسب التصنيف المفضل لديك</p>
            </div>
            <div className="feature">
              <h3>⚡ تحديثات مستمرة</h3>
              <p>نضيف محتوى جديد باستمرار</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>📊 إحصائيات</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>+50,000</h3>
              <p>فيلم</p>
            </div>
            <div className="stat-item">
              <h3>+10,000</h3>
              <p>مسلسل</p>
            </div>
            <div className="stat-item">
              <h3>+1,000,000</h3>
              <p>مستخدم</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>متاح</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>🤝 تواصل معنا</h2>
          <p>
            نحن نرحب بآرائكم واقتراحاتكم. لا تتردد في التواصل معنا عبر:
          </p>
          <div className="contact-info">
            <p>📧 البريد الإلكتروني: info@movieland.com</p>
            <p>📱 الهاتف: +1234567890</p>
            <p>📍 العنوان: عالم الأفلام الرائع</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 