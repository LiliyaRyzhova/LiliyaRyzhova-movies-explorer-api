import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import filmImage from '../../images/filmScreen.png'

function MoviesCard(props){

	const [isLiked, setLike]=React.useState(false)
	const location = useLocation();

	const handleLike = () =>{
		setLike(true)
	}

	return(
  <article className="card">
			<img className="card__film-image" alt="Фото фильма" src={filmImage}/>
			 <div className="card__info">
					 <p className="card__name">33 слова о дизайне</p>
						{ location.pathname === '/movies' && (<button className={`card__button card__button_like card__button_like${props.isLiked ? "_active" : ""}`} type="button" aria-label="сохранить фильм" onClick={handleLike} isLiked={isLiked}></button>)}
						{ location.pathname === '/saved-movies' && (<button className="card__button card__button_remove" type="button" aria-label="сохранить фильм"></button>)}
				</div>
				<p className="card__film-duration">1ч42м</p>
		</article>
	)
}

export default MoviesCard;