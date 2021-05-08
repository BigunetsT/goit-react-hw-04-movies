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
    // history.push(location?.state?.from);
    if (location.state) {
      history.push(location.state.from);
      return;
    }
    console.log('no state');
    history.push({
      pathname: routes.movies,
    });

    // if (search) {
    //   history.push({
    //     pathname: '/movies',
    //     search: search,
    //   });
    // } else {
    //   history.push({
    //     pathname: '/',
    //   });
    // }
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
    } = this.props;
    return (
      <>
        <div className="container">
          <button
            type="button"
            className={styles.btn}
            onClick={this.handleGoBack}
          >
            Go back
          </button>
          <div className={styles.movie}>
            <img className={styles.movie__img} src={imgUrl} alt={title} />
            <div className={styles.movie__info}>
              <h2 className={styles.movie__title}>
                {title}
                <span> ({releaseDate})</span>
              </h2>
              {rating ? (
                <p className={styles.movie__raiting}>
                  Raiting:<span className={styles.ratingData}>{rating} </span>
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
                to={`${match.url}/cast`}
              >
                Cast
              </NavLink>
            </li>
            <li className={styles.link}>
              <NavLink
                className={styles.navLink}
                activeClassName={styles.activeNavLink}
                to={`${match.url}/reviews`}
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
