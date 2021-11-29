import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './NavigationSideMenu.css';

function NavigationSideMenu(props) {
	const location = useLocation();

	return (
		<div className={`side-navigation side-navigation${props.isOpen ? "_opened" : ""}`} >
			<div className="side-navigation__container">
				<button className="side-navigation__close-button " type="button" onClick={props.onClose}></button>
				<ul className="side-navigation__list">
				  <li className="side-navigation__link-item"><Link exact="true" to="/" className="header-navigation__link" >Главная</Link></li>
						<li className="side-navigation__link-item"><NavLink exact="true" to="/movies" className={`header-navigation__link header-navigation__link_${ location.pathname === "/movies" ? "active" : ""}`}  >Фильмы</NavLink></li>
						<li className="side-navigation__link-item"><NavLink to="/saved-movies" className={`header-navigation__link header-navigation__link_${ location.pathname === "/saved-movies" ? "active" : ""}`}  >Сохранённые фильмы</NavLink></li>
				</ul>
				<Link to="/profile" className="side-navigation__profile"></Link>
			</div>
		</div>)
}

export default NavigationSideMenu;