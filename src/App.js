import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import Genres from "./pages/Genres";
import Trending from "./pages/Trending";
import About from "./pages/About";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
