import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../servieces/movies-api';
import MovieCard from '../components/MovieCard';
import generatePosterPath from '../helpers/generatePosterPath';
import changeGenresList from '../helpers/changeGenresList';

class MovieDetailsPage extends Component {
  state = {
    imgUrl: '',
    title: '',
    descr: '',
    genres: '',
    releaseDate: '',
    rating: '',
  };

  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const data = await moviesApi.searchMovieDetailsById(Number(movieId));
      this.setState({
        imgUrl: generatePosterPath(data.poster_path),
        title: data.title,
        descr: data.overview,
        genres: changeGenresList(data.genres),
        releaseDate:
          String(Number.parseInt(data.release_date)) ||
          String(Number.parseInt(data.first_air_date)),
        rating: String(data.vote_average),
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movieId } = this.props.match.params;
    const { imgUrl, title, descr, genres, releaseDate, rating } = this.state;
    return (
      <MovieCard
        {...this.props}
        movieId={movieId}
        imgUrl={imgUrl}
        title={title}
        descr={descr}
        genres={genres}
        releaseDate={releaseDate}
        rating={rating}
      />
    );
  }
}

MovieDetailsPage.propTypes = {
  movieId: PropTypes.string,
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  descr: PropTypes.string,
  genres: PropTypes.string,
  releaseDate: PropTypes.string,
  rating: PropTypes.string,
};

export default MovieDetailsPage;
