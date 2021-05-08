import defaultImage from '../images/default.jpg';
const POSTER_URL = 'https://themoviedb.org/t/p/w500';

const generatePosterPath = imageName => {
  if (!imageName) {
    return defaultImage;
  }
  return `${POSTER_URL}${imageName}`;
};

export default generatePosterPath;
