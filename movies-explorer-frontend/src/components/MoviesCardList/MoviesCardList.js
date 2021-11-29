import React, { Suspense } from "react";
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MovieButton from '../MovieButton/MovieButton';
import { moviesMinLenght, movieMaxLenght } from '../../utils/consts';

function MoviesCardList(props) {

  const [counter, setCounter] = React.useState(4);
  const location = useLocation();

  function showMoreMovies() {
    setCounter(counter + 4);
  }

  return (
    <>
      <section className="movies">
        <div className="movies__list">
          {location.pathname === '/movies' && (<Suspense fallback={<Preloader />}>
            {props.message ? (
              <p className="movies-message">{props.message}</p>
            ) : (
              props.movies
                .slice(0, counter)
                .map((movie, id) => (
                  <MoviesCard
                    movie={movie}
                    name={movie.nameRU}
                    duration={movie.duration}
                    key={id}
                    id={movie._id}
                    {...movie}
                    isSavedMovies={props.isSavedMovies}
                    onAddMovie={props.onAddMovie}
                    onDelete={props.onDelete}
                    savedMovies={props.savedMovies}
                    likedMovies={props.likedMovies}
                    isLiked={props.isLiked}
                  />
                ))
            )}
          </Suspense>)}
          {location.pathname === '/saved-movies' && (props.movies.map((movie, id) => {
            return (
              <MoviesCard
              movie={movie}
              name={movie.nameRU}
              duration={movie.duration}
              key={id}
              id={movie._id}
              {...movie}
              isSavedMovies={props.isSavedMovies}
              onAddMovie={props.onAddMovie}
              onDelete={props.onDelete}
              savedMovies={props.savedMovies}
              likedMovies={props.likedMovies}
              isLiked={props.isLiked}
              />)
          }))}
        </div>

      </section>
      {location.pathname === '/movies' &&
        props.movies.length >= moviesMinLenght &&
        props.movies.length > counter &&
        props.movies.length <= movieMaxLenght &&
        !props.message ? (
        <MovieButton showMoreMovies={showMoreMovies} />
      ) : (
        ""
      )}
    </>
  );
}

export default MoviesCardList;