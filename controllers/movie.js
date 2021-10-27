const Movie = require('../models/movie');
const ValidationError = require('../errors/ValidationError');
const NotFoundError = require('../errors/NotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');

module.exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description, image,
    trailer, nameRU, nameEN, thumbnail, movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
  })
    .then((user) => res.status(200).send({
      data: {
        country: user.country,
        director: user.director,
        duration: user.duration,
        year: user.year,
        description: user.description,
        image: user.image,
        trailer: user.trailer,
        nameRu: user.nameRu,
        nameEN: user.nameEN,
        thumbnail: user.thumbnail,
        movieId: user.movieId,
      },
    }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        throw new ValidationError('Некорректные данные');
      } else {
        next(err);
      }
    })
    .catch(next);
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFoundError('Фильм не найден');
    })
    .then((movie) => {
      if (!movie || movie.owner.toString() !== req.user._id) {
        throw new ForbiddenError('Недостаточно прав для удаления карточки');
      } else {
        Movie.deleteOne(movie)
          .then(() => res.status(200).send(movie));
      }
    })
    .catch(next);
};
