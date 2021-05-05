import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import moviesApi from '../servieces/movies-api';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const data = await moviesApi.fetchMovies();
    this.setState({ movies: data });
  }
  render() {
    const { movies } = this.state;
    return <MovieList movies={movies} />;
  }
}

// HomePage.propTypes = {};

export default HomePage;
