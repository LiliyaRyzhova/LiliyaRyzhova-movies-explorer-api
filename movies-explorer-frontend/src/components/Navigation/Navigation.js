import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo1 from '../../images/logoN1.svg';
import logo2 from '../../images/logoN1.svg';
import './Navigation.css';
import NavigationSideMenu from './NavigationSideMenu/NavigationSideMenu';

function Navigation(props){

	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();

	const handleOpenMenu = () => {
			setIsOpen(true);
	};
	
	const handleCloseMenu = () => {
		setIsOpen(false);
};

	return(
		 <div className="header-navigation">
			  <div className="header-navigtion__container">
{location.pathname === '/movies' && (			
     <>
     <img className="header-navigation__logo" src={logo1} alt='логотип' />
				 <nav className="header-navigation__menu">
								<div className="header-navigation__menu">
								<ul className="header-navigation__list">
									 <li className="header-navigation__link-item"><NavLink exact="true" to="/movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Фильмы</NavLink></li>
										<li className="header-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Сохранённые фильмы</NavLink></li>
								</ul>
								<Link to="/profile" className="header-navigation__profile"></Link>
       </div>
					</nav>
					<nav className="header-navigation__menu_burger">
						 <button className="header-navigation__menu-button" type="button" onClick={handleOpenMenu}></button>
					</nav>
					<NavigationSideMenu isOpen={isOpen} onClose={handleCloseMenu}/>
					</>)}
					{location.pathname === '/saved-movies' && (			
     <>
     <img className="header-navigation__logo" src={logo1} alt='логотип' />
				 <nav className="header-navigation__menu">
								<div className="header-navigation__menu">
								<ul className="header-navigation__list">
								  <li className="header-navigation__link-item"><NavLink exact="true" to="/movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Фильмы</NavLink></li>
										<li className="header-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Сохранённые фильмы</NavLink></li>
								</ul>
								<Link to="/profile" className="header-navigation__profile"></Link>
       </div>
					</nav>
					<nav className="header-navigation__menu_burger">
						 <button className="header-navigation__menu-button" type="button" onClick={handleOpenMenu}></button>
					</nav>
					<NavigationSideMenu isOpen={isOpen} onClose={handleCloseMenu}/>
					</>)}
					{location.pathname === '/profile' && (			
     <>
     <img className="header-navigation__logo" src={logo1} alt='логотип' />
				 <nav className="header-navigation__menu">
								<div className="header-navigation__menu">
								<ul className="header-navigation__list">
								  <li className="header-navigation__link-item"><NavLink exact="true" to="/movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Фильмы</NavLink></li>
										<li className="header-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link" activeClassName="header-navigation__link_active" >Сохранённые фильмы</NavLink></li>
								</ul>
								<Link to="/profile" className="header-navigation__profile"></Link>
       </div>
					</nav>
					<nav className="header-navigation__menu_burger">
						 <button className="header-navigation__menu-button" type="button" onClick={handleOpenMenu}></button>
					</nav>
					<NavigationSideMenu isOpen={isOpen} onClose={handleCloseMenu}/>
					</>)}
{location.pathname === "/" && (			  
     <>
					<img className="header-navigation__logo" src={logo2} alt='логотип' />
					<nav className="header-navigation__menu_start-page">
						 <Link to="/signup" className="header-navigation__registration-button">Регистрация</Link>
							<Link to="/signin"><button className="header-navigation__entrance-button">Вход</button></Link>
					</nav>
					</>)}
					
					</div>
			</div>
	)
}

export default Navigation;