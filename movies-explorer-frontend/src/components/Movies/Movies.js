import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from './SearchForm/SearchForm';
// import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
// import MovieButton from '../MovieButton/MovieButton';
// import Preloader from '../Preloader/Preloader';

function Movies(props){

	return(
		<div className="movies-section">
			<Header color='black'/>
			<SearchForm onGetMovies={props.onGetMovies} onFilter={props.onFilter}/>
				<MoviesCardList
				  movies={props.movie}
						onGetMovies={props.onGetMovies}
						onAddMovie={props.onAddMovie}
						likedMovies={props.likedMovies}
						savedMovies={props.savedMovies}
						isSaved={props.isSaved}
						message={props.message}
						isLiked={props.isLiked}
						/>
		 {/* <MovieButton /> */}
		 {/* <Preloader /> */}
		 <Footer />
		</div>
	)
}

export default Movies;