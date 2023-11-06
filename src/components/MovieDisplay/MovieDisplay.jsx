import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./MovieDisplay.module.scss";

export default function MovieDisplay({ movie, getMovieInfo }) {
  const [selectedMovie, setSelectedMovie] = useState({ getMovieInfo });
  const [toggle, setToggle] = useState(false);

  const handleClick = (id) => {
    getMovieInfo(id);
    setToggle(!toggle);
  };

  const loading = () => <>Currently Loading Movie List...</>;
  const loaded = () => (
    <div className={styles.container}>
      <motion.div
        className={styles.movieCard}
        onClick={() => handleClick(movie.imdbID)}
      >
        <motion.div
          className={`${styles.movieFront} ${toggle ? styles.hidden : ""}`}
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            src={movie.Poster}
            alt={movie.Title}
            className={styles.Poster}
          />
        </motion.div>
        <motion.div
          className={`${styles.movieBack} ${toggle ? "" : styles.hidden}`}
        >
          <h2 className={styles.Movie}>{movie.Title}</h2>
          <br />
          <h3>Released: {movie.Year}</h3> <br />
          {selectedMovie && (
            <>
              <h3>Director:</h3>
              <h4>{selectedMovie.Director}</h4>
              <br />
              <h3>Genre:</h3>
              <h4> {selectedMovie.Genre}</h4>
              <br />
              <h3>Plot:</h3>
              <p className={styles.Plot}>{selectedMovie.Plot}</p>
              <br />
              <h3>Rated: {selectedMovie.Rated}</h3>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );

  return movie && movie.Title ? loaded() : loading();
}
