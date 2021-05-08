import React, { PureComponent } from 'react';
import moviesApi from '../../servieces/movies-api';
import ReviewsList from '../ReviewsList';
import PropTypes from 'prop-types';

class Reviews extends PureComponent {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    try {
      const { movieId } = this.props.match.params;
      const data = await moviesApi.searchMovieReviewsById(Number(movieId));
      this.setState({
        reviews: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { reviews } = this.state;
    return <ReviewsList reviews={reviews} />;
  }
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};
export default Reviews;
