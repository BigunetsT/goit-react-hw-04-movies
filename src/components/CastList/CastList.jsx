import PropTypes from 'prop-types';
import CastItem from '../CastItem';
import styles from './CastList.module.scss';

const CastList = ({ cast }) => {
  return (
    <ul className={styles.list}>
      {cast.length > 0 ? (
        cast.map(({ cast_id, profile_path, name, character }) => (
          <li key={cast_id} className={styles.link}>
            <CastItem
              profile_path={profile_path}
              name={name}
              character={character}
            />
          </li>
        ))
      ) : (
        <p>NO CAST</p>
      )}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CastList;
