import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import getMovies from '../../utils/MoviesApi';
import { shortFilMaxDuration } from '../../utils/consts';
import * as auth from '../../utils/auth';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { saveUserMovie, deleteMovie, getUserMovies, getUserData, logOut, changeUserData } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [movies, setMovies] = React.useState([]);
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [moviesMessage, setMoviesMessage] = React.useState("");
  const [messageRegErr, setMessageRegErr] = React.useState("");
  const [messageLogErr, setMessageLogErr] = React.useState("");
  const [messageProfileErr, setMessageProfileErr] = React.useState("");
  const [userMovies, setUserMovies] = React.useState([]);
  const [shortMovies, setShortMovies] = React.useState(false);
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [userName, setUserName] = React.useState();
  const [isLiked, setIsLiked] = React.useState(false)
  const [loggedIn, setState] = React.useState(false);
  const [toolTipStatus, setToolTipStatus] = React.useState({
    img: 'fail',
    text: 'Что-то пошло не так! Попробуйте ещё раз.',
  });
  const [isInfoToolTipNotificationOpen, setIsInfoToolTipNotificationOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const history = useHistory();

  React.useEffect(() => {
    Promise.all([
      getUserData(),
      getUserMovies()
    ])
      .then(([data, movies]) => {
        console.log(data)
        console.log(movies)
        setCurrentUser(data);
        setUserMovies(movies);
        console.log(movies)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []
  )
  console.log(currentUser)


  //регистрация

  function handleRegister(email, password, name) {
    auth.register(email, password, name)
      .then((data) => {
        if (data) {
          setEmail(email)
          setPassword(password)
          setUserName(name)
          setCurrentUser(data)
          showNotificationIsRegistered()
          handleLogin(email,password)
          history.push('/movies')
        }
      })
      .catch((err) => {

        if (err === "Ошибка: 409") {
          setMessageRegErr("Пользователь с таким email уже существует");
        } else {
          setMessageRegErr("При регистрации пользователя произошла ошибка");
        }
      })
      .finally(() => setIsInfoToolTipNotificationOpen(true));
  }

  //уведомление об успешной регистрации

  function showNotificationIsRegistered() {
    setToolTipStatus({ img: 'success', text: 'Вы успешно зарегистрировались!' })
  }

  function closeAllPopups() {
    setIsInfoToolTipNotificationOpen(false)
  }

  // логин

  function handleLogin(email, password) {
    auth.authorize(email, password)
      .then((data) => {
        if (data) {
          setEmail(email)
          setPassword(password)
          handleLoginState()
          handleTokenCheck()
          history.push('/movies')
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`)
        setMessageLogErr("При авторизации произошла ошибка");
        if (err === 401) {
          setMessageLogErr("При авторизации произошла ошибка. Токен не передан или передан не в том формате");
        }
        if (err === 400) {
          setMessageLogErr("Неверный email или пароль")
        }
      }
      )
  }

  function handleLoginState() {
    setState(true)
  }

  //logout

  function handleLogOute() {
    logOut()
    localStorage.clear();
  }

  //update user data

  function handleUpdateUserData(user) {
    changeUserData(user)
      .then((userData) => {
        setCurrentUser({
          ...currentUser,
          name: userData.name,
          email: userData.email,
        })
        closeAllPopups()
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        if (err.status === 409) {
          setMessageProfileErr("Пользователь с таким email уже существует");
        } else {
          setMessageProfileErr("При изменении данных профиля произошла ошибка");
        }
      })
  }

  //получаем все фильмы и сохраняем в локальное хранилище

  useEffect(() => {
    getMovies()
      .then((allMovies) => {
        setMovies(allMovies);
        localStorage.setItem("movies", JSON.stringify(allMovies));
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        localStorage.removeItem("movies");
      });
  }, []);

  //фильтр фильмов по поисковой форме, отображаем результат поиска

  function handleGetMovies(keyword) {
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = movies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      const checkedLikes = findedMovies.map((movie) => {
        movie.isSaved = userMovies.some(
          (userMovie) => userMovie.movieId === movie.id && userMovie.owner === currentUser._id
        );
        return movie;
      });
      setSortedMovies(checkedLikes);
      localStorage.setItem("sortedMovies", JSON.stringify(findedMovies));
    }
  }

  //обработка чек-бокс фильтра

  function handleCheckBox() {
    setShortMovies(!shortMovies);
  }

  //чек-бокс фильтр - корометражки - фильмы с макс продолжительностью 40 мин.

  function filterShortMovies(arr) {
    if (arr.length !== 0 || arr !== "undefind") {
      return arr.filter((movie) =>
        shortMovies ? movie.duration <= shortFilMaxDuration : true
      );
    }
  }

  //сохраненные фильмы

  function handleGetSavedMovies(keyword) {
    setMoviesMessage("");
    const key = new RegExp(keyword, "gi");
    const findedMovies = userMovies.filter(
      (item) => key.test(item.nameRU) || key.test(item.nameEN)
    );
    if (findedMovies.length === 0) {
      setMoviesMessage("Ничего не найдено");
    } else {
      setMoviesMessage("");
      setUserMovies(findedMovies);
    }
  }

  // обработка изменения кнопки лайк-сохранить

  function handleLikeChange(movie) {
    const clickedMovie = movie.isSaved;
    if (clickedMovie) {
      handleDislikeClick(movie);
    } else {
      handleLikeClick(movie);
    }
  }

  // обработка лайка

  function handleLikeClick(movie) {
    saveUserMovie(movie)
      .then((newMovie) => {
        // setIsSaved(true)
        // newMovie.isSaved = true
        if (!newMovie) {
          throw new Error("При добавлении фильма произошла ошибка");
        } else {
          localStorage.setItem(
            "userMovies",
            JSON.stringify((newMovie = [newMovie, ...userMovies]))
          );
          setUserMovies(newMovie);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleDislikeClick(movie) {
    const movieId = movie.id || movie.movieId;
    const selectedMovie = userMovies.find((item) => item.movieId === movieId);
    deleteMovie(selectedMovie._id)
      .then((deletedMovie) => {
        if (!deletedMovie) {
          throw new Error("При удалении фильма произошла ошибка");
        } else {
          const newMoviesList = userMovies.filter((c) => c.movieId !== movieId);
          setUserMovies(newMoviesList);
        }
      })
      .catch((err) => console.log(`При удалении фильма: ${err}`));
  }

  function handleMovieDeleteButton(movie) {
    handleDislikeClick(movie);
  }

  function handleTokenCheck() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
      auth.checkToken(jwt).then((res) => {
        if (res) {
          handleLoginState()
          // history.push("/");
        }
        console.log(res)
        setCurrentUser(res)
      })
        .catch((err) =>
          console.log(err))
    }
  }

  function checkSavedMovie(movie) {
    return (movie.isSaved = userMovies.some(userMovie => userMovie.movieId === movie.id && userMovie.owner === currentUser._id));
  }

  React.useEffect(() => {
    handleTokenCheck();
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <InfoTooltip isOpen={isInfoToolTipNotificationOpen} status={toolTipStatus} onClose={closeAllPopups} />
        <Switch>
          <Route exact={true} path="/"> <Main loggedIn={loggedIn} /> </Route>
          <Route path="/signup"> <Register onRegister={handleRegister} message={messageRegErr} /></Route>
          <Route path="/signin"> < Login onLogin={handleLogin} message={messageLogErr} /> </Route>
          <ProtectedRoute
            path="/movies"
            loggedIn={loggedIn}
            component={Movies}
            movie={filterShortMovies(sortedMovies)}
            onGetMovies={handleGetMovies}
            onFilter={handleCheckBox}
            onAddMovie={handleLikeChange}
            likedMovies={checkSavedMovie}
            message={moviesMessage}
            isLiked={isLiked}
          // isSaved={isSaved}
          />
          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            movie={filterShortMovies(userMovies)}
            onGetMovies={handleGetSavedMovies}
            onFilter={handleCheckBox}
            isSavedMovies={true}
            onDelete={handleMovieDeleteButton}
            likedMovies={checkSavedMovie}
            message={moviesMessage}
          />
          <ProtectedRoute path="/profile" component={Profile} loggedIn={loggedIn} message={messageProfileErr} onLogout={handleLogOute} onUpdateUserData={handleUpdateUserData} />
          <Route path="*"> <PageNotFound /> </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
