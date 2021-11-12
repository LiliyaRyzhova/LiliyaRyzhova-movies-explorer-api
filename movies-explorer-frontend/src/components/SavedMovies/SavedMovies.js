import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function SavedMovies(props){

	return(
   <section className="saved-movies">
				<Header color='black'/>
				<SearchForm />
				<MoviesCardList />
				<Footer />
			</section>
	)
}

export default SavedMovies;