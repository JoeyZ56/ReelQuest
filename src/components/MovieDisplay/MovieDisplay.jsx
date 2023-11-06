import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./MovieDisplay.module.scss";

export default function MovieDisplay({ movie, getMovieInfo }) {
  const [selectedMovie, setSelectedMovie] = useState({ getMovieInfo });
  const [toggle, setToggle] = useState(false);

  const handleClick = (id) => {
    getMovieInfo(id, setSelectedMovie);
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
          <h2 className={`${styles.Movie} ${styles.cardBackInfo}`}>
            <i>{movie.Title}</i>
          </h2>

          {selectedMovie && (
            <>
              <h3>Director:</h3>
              <p className={styles.infoSpacing}>{selectedMovie.Director}</p>

              <h3>Genre:</h3>
              <p className={styles.infoSpacing}> {selectedMovie.Genre}</p>

              <h3>Plot:</h3>
              <p className={`${styles.infoSpacing} ${styles.cardBackInfo}`}>
                {selectedMovie.Plot}
              </p>
              <h4>Released: {movie.Year}</h4>
              <h4>Rated: {selectedMovie.Rated}</h4>
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );

  return movie && movie.Title ? loaded() : loading();
}
