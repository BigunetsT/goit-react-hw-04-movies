const changeGenresList = genres => {
  if (!genres.length) return 'NO GENRE';
  return genres.map(genre => genre.name).join(' ');
};

export default changeGenresList;
