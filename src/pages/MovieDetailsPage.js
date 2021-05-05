import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import moviesApi from '../servieces/movies-api';
import defaultImage from '../images/default.jpg';
const POSTER_URL = 'https://themoviedb.org/t/p/w500';

class MovieDetailsPage extends Component {
  state = {
    imgUrl: '',
    title: '',
    descr: '',
    genres: [],
    releaseDate: '',
    rating: '',
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const data = await moviesApi.searchMovieDetailsById(Number(movieId));
    this.setState({
      imgUrl: this.generatePosterPath(data.poster_path),
      title: data.title,
      descr: data.overview,
      genres: this.changeGenresList(data.genres),
      releaseDate:
        Number.parseInt(data.release_date) ||
        Number.parseInt(data.first_air_date),
      rating: data.vote_average,
    });
  }
  generatePosterPath(imageName) {
    if (!imageName) {
      return defaultImage;
    }
    return `${POSTER_URL}${imageName}`;
  }
  changeGenresList(genres) {
    if (!genres.length) return 'NO GENRE';
    return genres.map(genre => genre.name).join(' ');
  }
  render() {
    const { movieId } = this.props.match.params;
    const { imgUrl, title, descr, genres, releaseDate, rating } = this.state;
    return (
      <div>
        <h1>Страница фильма {movieId}</h1>
        <img src={imgUrl} alt={title} />
        <h2>
          {title}
          <span> ({releaseDate})</span>
        </h2>
        {rating ? <p>Raiting:{rating}</p> : null}
        <h3>Overview</h3>
        <p>{descr}</p>
        <h4>Genres</h4>
        <p>{genres}</p>
        <p>Additional information</p>
        <ul>
          <li>Cast</li>
          <li>Reviews</li>
        </ul>
      </div>
    );
  }
}

// MovieDetailsPage.propTypes = {};

export default MovieDetailsPage;
