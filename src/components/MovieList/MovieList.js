import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieList.module.scss';

const MovieList = ({ movies, location, searchQuery }) => {
  return (
    <ul className={styles.list}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            className={styles.link}
            to={{
              pathname: `/movies/${movie.id}`,
              state: { from: location },
              search: searchQuery,
            }}
          >
            {movie?.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  searchQuery: PropTypes.string,
};

export default withRouter(MovieList);
