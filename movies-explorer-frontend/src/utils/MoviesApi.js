const baseUrl = "https://api.nomoreparties.co";

const getMovies = () => {
  return fetch(`${baseUrl}/beatfilm-movies`)
    .then((res) => res.json())
    .then((movies) => movies);
};

export default getMovies;