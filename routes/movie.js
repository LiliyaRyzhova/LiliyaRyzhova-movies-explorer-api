const router = require('express').Router();

const { getMovies, createMovie, deleteMovie } = require('../controllers/movie');

const { validateMovie, validateId } = require('../middlewares/validation');

router.get(' ', getMovies);
router.post(' ', validateMovie, createMovie);
router.delete('/:movieId', validateId, deleteMovie);

module.exports = router;
