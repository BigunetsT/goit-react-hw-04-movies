import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const MY_KEY = '92dbea49aa4406146839d70707aaf148';

const moviesApi = {
  fetchMovies() {
    return axios
      .get(`${BASE_URL}/trending/all/day?api_key=${MY_KEY}`)
      .then(response => response.data.results);
  },

  searchMovies(searchQuery) {
    return axios
      .get(
        `${BASE_URL}/search/movie?api_key=${MY_KEY}&query=${searchQuery}&language=en-US&page=1&include_adult=false`,
      )
      .then(response => response.data.results);
  },
  searchMovieDetailsById(id) {
    return axios
      .get(`${BASE_URL}/movie/${id}?api_key=${MY_KEY}&language=en-US`)
      .then(response => response.data);
  },
  searchMovieCastById(id) {
    return axios
      .get(`${BASE_URL}/movie/${id}/credits?api_key=${MY_KEY}&language=en-US`)
      .then(response => response.data.cast);
  },
  searchMovieReviewsById(id) {
    return axios
      .get(
        `${BASE_URL}/movie/${id}/reviews?api_key=${MY_KEY}&language=en-US&page=1`,
      )
      .then(response => response.data.results);
  },
};
export default moviesApi;
