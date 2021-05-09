import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Cast from '../Cast';
import Reviews from '../Reviews';
import routes from '../../routes';
import styles from './MovieCard.module.scss';
import '../../index.scss';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  handleGoBack = () => {
    const { location, history } = this.props;
    const search = location.search.split('').slice(1).join('');
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    if (location.search) {
      history.push({
        pathname: routes.movies,
        search: `query=${search}`,
      });
    } else {
      history.push({
        pathname: routes.home,
      });
    }
  };
  render() {
    const {
      imgUrl,
      title,
      descr,
      genres,
      releaseDate,
      rating,
      match,
      location,
      movie,
    } = this.props;

    return (
      <>
        <button
          type="button"
          className={styles.btn}
          onClick={this.handleGoBack}
        >
          <svg
            id="Layer"
            className={styles.svg}
            enableBackground="new 0 0 64 64"
            height="20"
            viewBox="0 0 64 64"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m54 30h-39.899l15.278-14.552c.8-.762.831-2.028.069-2.828-.761-.799-2.027-.831-2.828-.069l-17.448 16.62c-.755.756-1.172 1.76-1.172 2.829 0 1.068.417 2.073 1.207 2.862l17.414 16.586c.387.369.883.552 1.379.552.528 0 1.056-.208 1.449-.621.762-.8.731-2.065-.069-2.827l-15.342-14.552h39.962c1.104 0 2-.896 2-2s-.896-2-2-2z" />
          </svg>
          <span>Go back</span>
        </button>
        {movie ? (
          <>
            <div className="container">
              <div className={styles.movie}>
                <img className={styles.movie__img} src={imgUrl} alt={title} />
                <div className={styles.movie__info}>
                  <h2 className={styles.movie__title}>
                    {title}
                    <span> ({releaseDate})</span>
                  </h2>
                  {rating && Number(rating) !== 0 ? (
                    <p className={styles.movie__raiting}>
                      <b>Raiting</b>:
                      <span className={styles.ratingData}>{rating} </span>
                    </p>
                  ) : null}
                  <h3 className={styles.movie__overview}>Overview</h3>
                  <p className={styles.movie__desc}>{descr}</p>
                  <h4 className={styles.movie__genres}>Genres</h4>
                  <p>{genres}</p>
                </div>
              </div>
            </div>
            <div className="container">
              <p className={styles.info}>Additional information</p>
              <ul className={styles.list}>
                <li className={styles.link}>
                  <NavLink
                    className={styles.navLink}
                    activeClassName={styles.activeNavLink}
                    to={{
                      pathname: `${match.url}/cast`,
                      search: location.search,
                    }}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={styles.link}>
                  <NavLink
                    className={styles.navLink}
                    activeClassName={styles.activeNavLink}
                    to={{
                      pathname: `${match.url}/reviews`,
                      search: location.search,
                    }}
                  >
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>

            <Switch>
              <Route path={routes.cast} render={props => <Cast {...props} />} />
              <Route
                path={routes.reviews}
                render={props => <Reviews {...props} />}
              />
            </Switch>
          </>
        ) : (
          <span className={styles.message}>NO INFORMATION ABOUT THIS FILM</span>
        )}
      </>
    );
  }
}

MovieCard.propTypes = {
  movieId: PropTypes.string,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  descr: PropTypes.string,
  genres: PropTypes.string,
  releaseDate: PropTypes.string,
  rating: PropTypes.string,
};

export default MovieCard;
