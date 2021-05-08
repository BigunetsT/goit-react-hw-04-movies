import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../servieces/movies-api';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    try {
      const data = await moviesApi.fetchMovies();
      this.setState({ movies: data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const { movies } = this.state;
    return (
      <>
        {movies.length > 0 && (
          <div className="container">
            <h1 className="title"> Trending today</h1>
            <MovieList movies={movies} />
          </div>
        )}
      </>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.array,
};

export default HomePage;
