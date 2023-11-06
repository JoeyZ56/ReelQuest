import MovieDisplay from "../MovieDisplay/MovieDisplay";
import styles from "./MoviesDisplay.module.scss";
import { motion } from "framer-motion";

export default function MoviesDisplay({ movies, getMovieInfo }) {
  const loaded = () => (
    <div>
      {movies.Response === "True" ? (
        movies.Search.map((movie) => (
          <MovieDisplay
            key={movie.imdbID}
            movie={movie}
            getMovieInfo={getMovieInfo}
          />
        ))
      ) : (
        <section className={styles.movieError}>
          <h1 className={styles.errorMessage}>
            Oh, snap! It looks like this API is playing hide and seek with that
            movie, but it's a master of disguise and we couldn't find it.
          </h1>

          <ul>
            <i>Check spelling and spacing</i>
            <br />
            <span>Some movies are not in this Api</span>
          </ul>
          <img
            src="https://media.giphy.com/media/dqC7qh15XHPsy4Ffdr/giphy.gif"
            alt="Error"
          />
          <motion.a
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            href="/"
          >
            Return Home
          </motion.a>
        </section>
      )}
    </div>
  );

  const loading = () => <h1>Currently Loading Movie List...</h1>;

  return movies ? loaded() : loading();
}
