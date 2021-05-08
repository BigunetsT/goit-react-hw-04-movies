import PropTypes from 'prop-types';
import styles from './ReviewItem.module.scss';

const ReviewItem = ({ author, content }) => {
  return (
    <>
      <p className={styles.name}>Author: {author}</p>
      <p className={styles.contant}>"{content}"</p>
    </>
  );
};

ReviewItem.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ReviewItem;
