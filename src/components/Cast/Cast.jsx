import React, { PureComponent } from 'react';
import moviesApi from '../../servieces/movies-api';
import CastList from '../CastList';
import PropTypes from 'prop-types';

class Cast extends PureComponent {
  state = {
    cast: [],
  };
  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const data = await moviesApi.searchMovieCastById(Number(movieId));
      this.setState({
        cast: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { cast } = this.state;
    return <CastList cast={cast} />;
  }
}

Cast.propTypes = {
  cast: PropTypes.array,
};

export default Cast;
