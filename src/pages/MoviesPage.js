import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moviesApi from '../servieces/movies-api';
import Searchbar from '../components/Searchbar';
import MovieList from '../components/MovieList';
import queryString from 'query-string';

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
    try {
      if (prevState.searchQuery !== this.state.searchQuery) {
        const { searchQuery } = this.state;
        const { location } = this.props;
        const data = await moviesApi.searchMovies(searchQuery);
        this.setState({ movies: data });

        this.props.history.push({
          pathname: location.pathname,
          search: `query=${searchQuery}`,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidMount() {
    const { location } = this.props;
    const queryParams = Object.values(queryString.parse(location.search)).join(
      '',
    );
    if (!queryParams) return;
    this.onChangeQuery(queryParams);
  }

  render() {
    const { movies, searchQuery } = this.state;

    return (
      <div className="container">
        <Searchbar onSubmit={this.onChangeQuery} />
        {movies.length > 0 && (
          <MovieList movies={movies} searchQuery={searchQuery} />
        )}
      </div>
    );
  }
}

MoviesPage.propTypes = {
  movies: PropTypes.array,
  searchQuery: PropTypes.string,
};

export default MoviesPage;
