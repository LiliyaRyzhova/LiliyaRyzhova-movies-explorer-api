import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound(props){

	return(
		<section className="no-page">
			<h2 className="no-page__header">404</h2>
			<p className="no-page__caption">Страница не найдена</p>
   <Link className="no-page__link" to="/">Назад</Link>
		</section>
	)
}

export default PageNotFound;