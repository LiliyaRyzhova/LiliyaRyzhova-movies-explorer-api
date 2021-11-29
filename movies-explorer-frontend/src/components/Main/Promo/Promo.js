import React from 'react';
import logo from '../../../images/logo.svg';
import './Promo.css'

function Promo(props) {

	return(
		<section className="promo">
		<h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
		<img className="promo__logo" src={logo} alt="Логотип Яндекс практикума" />
		</section>
	)
}
export default Promo;