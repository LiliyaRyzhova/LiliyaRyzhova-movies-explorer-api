import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies(props){
console.log(props)

	return(
   <section className="saved-movies">
				<Header color='black'/>
   <SearchForm onGetMovies={props.onGetMovies} onFilter={props.onFilter}/>
				<MoviesCardList
				  movies={props.movie}
						onGetMovies={props.onGetMovies}
						onDelete={props.onDelete}
						isSavedMovies={props.isSavedMovies}
						message={props.message}/>
				<Footer />
			</section>
	)
}

export default SavedMovies;