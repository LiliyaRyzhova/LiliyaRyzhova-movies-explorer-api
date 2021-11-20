import React, { Suspense } from "react";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import MovieButton from '../MovieButton/MovieButton';

function MoviesCardList(props){

	const [counter, setCounter] = React.useState(4);

  function showMoreMovies() {
    setCounter(counter + 4);
  }

	return(
		<>
		<section className="movies">
			<div className="movies__list">
			<Suspense fallback={<Preloader />}>
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
                  // isSavedMovies={props.isSavedMovies}
                  onAddMovie={props.onAddMovie}
                  onDelete={props.onDelete}
                  savedMovies={props.savedMovies}
                  likedMovies={props.likedMovies}
                  isSavedMovies={props.isSavedMovies}
                  // isSaved={props.isSaved}
                />
              ))
          )}
        </Suspense>
			</div>

		</section>
		{props.movies.length >= 4 &&
			props.movies.length > counter &&
			props.movies.length <= 100 &&
			!props.message ? (
	<MovieButton showMoreMovies={showMoreMovies}  />
			) : (
					""
			)}
	</>
);
}

export default MoviesCardList;