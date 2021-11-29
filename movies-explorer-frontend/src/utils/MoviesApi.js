import {movieListUrl} from '../utils/consts';

const getMovies = () => {
  return fetch(`${movieListUrl}/beatfilm-movies`)
    .then((res) => res.json())
    .then((movies) => movies);
};

export default getMovies;