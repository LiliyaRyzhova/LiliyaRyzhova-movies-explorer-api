import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { movieListUrl } from '../../utils/consts';
import { convertMinutes } from '../../utils/utils';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function MoviesCard(props) {
	console.log(props)
	// const [isLiked, setIsLiked]=React.useState(!props.isSavedMovies && props.likedMovies(props.movie))
	const currentUser = React.useContext(CurrentUserContext)

	const isLiked = !props.isSavedMovies && props.likedMovies(props.movie);
	const location = useLocation();

	// React.useEffect(()=> {
	// 	setIsLiked(!props.isSavedMovies && props.likedMovies(props.movie))
	// })

	function handleLike() {
		props.onAddMovie({
			country: props.movie.country,
			director: props.movie.director,
			duration: props.movie.duration,
			year: props.movie.year,
			description: props.movie.description,
			image: `${movieListUrl}${props.movie.image ? props.movie.image.url : ""}`,
			trailer: props.movie.trailerLink,
			thumbnail: `${movieListUrl}${props.movie.image.formats.thumbnail
					? props.movie.image.formats.thumbnail.url
					: ""
				}`,
			movieId: props.movie.id,
			nameRU: props.movie.nameRU,
			nameEN: props.movie.nameEN,
			isSaved: props.movie.isSaved,
		});
	// 	if(props.isSaved){
	// 	setIsLiked(false)
	// } else {
	// 	setIsLiked(true)
	// }
}

	function handleDelete() {
		props.onDelete(props.movie);
  // setIsLiked(false)
	}

	return (
		<>
			{location.pathname === '/saved-movies' && (<article className={`card ${props.owner === currentUser._id ? "" : "card_hide"}`}>
				<a className="card-link" href={props.trailerLink} target="_blank" rel="noopener noreferrer">
					{location.pathname === '/movies' && (<img className="card__film-image" alt="Фото фильма" src={`${movieListUrl}${props.image.url}`} />)}
					{location.pathname === '/saved-movies' && (<img className="card__film-image" alt="Фото фильма" src={props.image} />)}
				</a>
				<div className="card__info">
					<p className="card__name">{props.nameRU}</p>
					{location.pathname === '/movies' && (<button className={`card__button card__button_save card__button_save${props.isLiked || isLiked ? "_active" : ""}`} type="button" aria-label="сохранить фильм" onClick={handleLike}></button>)}
					{location.pathname === '/saved-movies' && (<button className="card__button card__button_remove" type="button" aria-label="сохранить фильм" onClick={handleDelete}></button>)}
				</div>
				<p className="card__film-duration">{convertMinutes(props.duration)}</p>
			</article>)}
			{location.pathname === '/movies' && (<article className="card">
				<a className="card-link" href={props.trailerLink} target="_blank" rel="noopener noreferrer">
					{location.pathname === '/movies' && (<img className="card__film-image" alt="Фото фильма" src={`${movieListUrl}${props.image.url}`} />)}
					{location.pathname === '/saved-movies' && (<img className="card__film-image" alt="Фото фильма" src={props.image} />)}
				</a>
				<div className="card__info">
					<p className="card__name">{props.nameRU}</p>
					{location.pathname === '/movies' && (<button className={`card__button card__button_save card__button_save${props.isLiked || isLiked ? "_active" : ""}`} type="button" aria-label="сохранить фильм" onClick={handleLike}></button>)}
					{location.pathname === '/saved-movies' && (<button className="card__button card__button_remove" type="button" aria-label="сохранить фильм" onClick={handleDelete}></button>)}
				</div>
				<p className="card__film-duration">{convertMinutes(props.duration)}</p>
			</article>)}
		</>
	)
}

export default MoviesCard;