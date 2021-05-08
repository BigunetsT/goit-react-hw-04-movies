import PropTypes from 'prop-types';
import generatePosterPath from '../../helpers/generatePosterPath';
import styles from './CastItem.module.scss';

const CastItem = ({ profile_path, name, character }) => {
  return (
    <>
      <img
        className={styles.img}
        src={generatePosterPath(profile_path)}
        alt={name}
      />
      <p className={styles.name}>{name}</p>
      <p>Character: {character}</p>
    </>
  );
};

CastItem.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default CastItem;
