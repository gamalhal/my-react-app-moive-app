import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const API_URL = process.env.REACT_APP_OMDB_API_URL;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    if (!title.trim()) return;
    
    setLoading(true);
    try {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Header />
      
      <main className="main-content">
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

        <section className="movies-section">
          {loading && (
            <div className="loading">
              <div className="spinner"></div>
              <p>جاري البحث...</p>
            </div>
          )}

          {!loading && movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : !loading && (
            <div className="empty">
              <h2>لم يتم العثور على أفلام</h2>
              <p>جرب البحث بكلمات مختلفة</p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
