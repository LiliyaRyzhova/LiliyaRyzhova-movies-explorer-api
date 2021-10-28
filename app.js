require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const { createUser, login } = require('./controllers/user');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const NotFoundError = require('./errors/NotFoundError');
const { validateLogin, validateUser } = require('./middlewares/validation');

const app = express();

const { PORT = 3000, MONGO_URI = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;

app.use(cors({
  origin: ['https://api.movie.nomoredomains.monster', 'http://api.movie.nomoredomains.monster', 'localhost:3000'],
  credentials: true,
}));

app.use(helmet());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(MONGO_URI);

app.use(requestLogger);

app.post('/signup', validateUser, createUser);
app.post('/signin', validateLogin, login);

app.use('/users', auth, require('./routes/user'));
app.use('/movies', auth, require('./routes/movie'));

app.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден');
});

app.use(errorLogger);

app.use = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send({ message: err.message });
    return;
  }
  res.status(500).send({ message: `На сервере произошла ошибка: ${err.message}` });
  next();
};

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
