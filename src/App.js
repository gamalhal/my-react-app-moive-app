import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// استيراد المكونات الرئيسية
// Import main components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// استيراد صفحات التطبيق
// Import application pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Genres from "./pages/Genres";
import Trending from "./pages/Trending";
import About from "./pages/About";

// استيراد ملف الأنماط الرئيسي
// Import main stylesheet
import "./App.css";

/**
 * المكون الرئيسي للتطبيق - يدير التوجيه والهيكل العام
 * Main App Component - Manages routing and overall structure
 *
 * هذا المكون يحتوي على:
 * - نظام التوجيه باستخدام React Router
 * - الهيكل العام للتطبيق (Header, Navbar, Footer)
 * - تعريف جميع المسارات المتاحة
 *
 * This component contains:
 * - Routing system using React Router
 * - Overall app structure (Header, Navbar, Footer)
 * - Definition of all available routes
 */
const App = () => {
  return (
    // مزود التوجيه - يسمح بالتنقل بين الصفحات
    // Router provider - enables navigation between pages
    <Router>
      {/* الحاوية الرئيسية للتطبيق */}
      {/* Main app container */}
      <div className="app">
        {/* شريط التنقل الثابت */}
        {/* Fixed navigation bar */}
        <Navbar />

        {/* رأس الصفحة مع القسم البطولي */}
        {/* Page header with hero section */}
        <Header />

        {/* المحتوى الرئيسي - يتغير حسب الصفحة المحددة */}
        {/* Main content - changes based on selected page */}
        <main className="main-content">
          {/* تعريف المسارات المتاحة */}
          {/* Definition of available routes */}
          <Routes>
            {/* الصفحة الرئيسية - البحث وعرض الأفلام */}
            {/* Home page - search and display movies */}
            <Route path="/" element={<Home />} />

            {/* صفحة الأفلام - عرض مجموعة من الأفلام الشائعة */}
            {/* Movies page - display collection of popular movies */}
            <Route path="/movies" element={<Movies />} />

            {/* صفحة المسلسلات - عرض مجموعة من المسلسلات الشائعة */}
            {/* Series page - display collection of popular TV series */}
            <Route path="/series" element={<Series />} />

            {/* صفحة التصنيفات - تصفية الأفلام حسب النوع */}
            {/* Genres page - filter movies by type */}
            <Route path="/genres" element={<Genres />} />

            {/* صفحة الترند - المحتوى الأكثر شعبية حالياً */}
            {/* Trending page - currently most popular content */}
            <Route path="/trending" element={<Trending />} />

            {/* صفحة من نحن - معلومات عن التطبيق */}
            {/* About page - information about the application */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* تذييل الصفحة - روابط ومعلومات إضافية */}
        {/* Footer - links and additional information */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
