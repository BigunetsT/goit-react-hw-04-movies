import PropTypes from 'prop-types';
import ReviewItem from '../ReviewItem';
import styles from './ReviewsList.module.scss';

const ReviewsList = ({ reviews }) => {
  return (
    <ul className={styles.container}>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={styles.link}>
            <ReviewItem author={author} content={content} />
          </li>
        ))
      ) : (
        <p className={styles.text}>We don't have reviews for this movie. </p>
      )}
    </ul>
  );
};
ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ReviewsList;
