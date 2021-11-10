import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props){

	return(
		<section className="movies">
			<div className="movies__list">
				{/* {props.movies.map((movie) => ( */}
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
					<MoviesCard />
				{/* ))} */}
			</div>

		</section>
	)
}

export default MoviesCardList;