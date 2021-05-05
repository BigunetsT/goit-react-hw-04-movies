import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const MyKey = '92dbea49aa4406146839d70707aaf148';

const fetchMovies = () => {
  return axios
    .get(`${BASE_URL}/trending/all/day?api_key=${MyKey}`)
    .then(response => response.data.results);
};

const searchMovies = searchQuery => {
  return axios
    .get(
      `${BASE_URL}/search/movie?api_key=${MyKey}&query=${searchQuery}&language=en-US&page=1&include_adult=false`,
    )
    .then(response => response.data.results);
};

const searchMovieDetailsById = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${MyKey}&language=en-US`)
    .then(response => response.data);
};
export default { fetchMovies, searchMovies, searchMovieDetailsById };
