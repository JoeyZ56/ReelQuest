import { useState, useEffect, createContext } from "react";
import { getMovieInfo } from "./api/getMovieInfo";
import { getMovies } from "./api/getMovies";
import MoviesDisplay from "./components/MoviesDisplay/MoviesDisplay";
import Form from "./components/Form/Form";
import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import "./App.scss";

export const ThemeContext = createContext(null);

export default function App() {
  //Theme state
  const [theme, setTheme] = useState("light");

  //State to hold movie data
  const [movies, setMovies] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const data = await getMovies(searchTerm);
      setMovies(data);
    } catch (error) {
      console.log(error, "searchterm failed");
    }
  };

  useEffect(() => {
    handleSearch("How to Train Your Dragon");
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={styles.App} id={theme}>
        {/* passing a prop (rendering) */}
        <Form handleSearch={handleSearch} />
        <MoviesDisplay movies={movies} getMovieInfo={getMovieInfo} />
        <Footer toggleTheme={toggleTheme} />
      </div>
    </ThemeContext.Provider>
  );
}
