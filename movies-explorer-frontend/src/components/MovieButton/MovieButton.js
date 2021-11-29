import React from 'react';
import './MovieButton.css'

function MovieButton(props){

	return(
   <button className="more-movie-button" type="button" onClick={props.showMoreMovies}>
				Ещё
			</button>
	)
}

export default MovieButton;