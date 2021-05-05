import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import moviesApi from '../servieces/movies-api';
import Searchbar from '../components/Searchbar';
import MovieList from '../components/MovieList';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };
  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
    });
  };
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      const { searchQuery } = this.state;
      const data = await moviesApi.searchMovies(searchQuery);
      this.setState({ movies: data });
    }
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {movies.length > 0 && <MovieList movies={movies} />}
      </>
    );
  }
}

// MoviesPage.propTypes = {};

export default MoviesPage;
