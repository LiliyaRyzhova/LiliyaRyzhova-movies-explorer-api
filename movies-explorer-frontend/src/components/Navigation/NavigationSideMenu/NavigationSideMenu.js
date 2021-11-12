import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavigationSideMenu.css';

function NavigationSideMenu(props) {


	return (
		<div className={`side-navigation side-navigation${props.isOpen ? "_opened" : ""}`} >
			<div className="side-navigation__container">
				<button className="side-navigation__close-button " type="button" onClick={props.onClose}></button>
				<ul className="side-navigation__list">
				  <li className="side-navigation__link-item"><Link exact="true" to="/" className="header-navigation__link" activeClassName="header-navigation__link_active" >Главная</Link></li>
						<li className="side-navigation__link-item"><NavLink exact="true" to="/movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Фильмы</NavLink></li>
						<li className="side-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Сохранённые фильмы</NavLink></li>
				</ul>
				<Link to="/profile" className="side-navigation__profile"></Link>
			</div>
		</div>)
}

export default NavigationSideMenu;