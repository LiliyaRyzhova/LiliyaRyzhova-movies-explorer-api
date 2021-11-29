import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo1 from '../../images/logoN1.svg';
import logo2 from '../../images/logoN1.svg';
import './Navigation.css';
import NavigationSideMenu from './NavigationSideMenu/NavigationSideMenu';

function Navigation(props){
console.log(props)
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
     <Link to="/"><img className="header-navigation__logo" src={logo1} alt='логотип' /></Link>
				 <nav className="header-navigation__menu">
								<div className="header-navigation__menu">
								<ul className="header-navigation__list">
									 <li className="header-navigation__link-item"><NavLink exact={true} to="/movies" className="header-navigation__link header-navigation__link_active" >Фильмы</NavLink></li>
										<li className="header-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link" >Сохранённые фильмы</NavLink></li>
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
     <Link to="/"><img className="header-navigation__logo" src={logo1} alt='логотип' /></Link>
				 <nav className="header-navigation__menu">
								<div className="header-navigation__menu">
								<ul className="header-navigation__list">
								  <li className="header-navigation__link-item"><NavLink exact={true} to="/movies" className="header-navigation__link" >Фильмы</NavLink></li>
										<li className="header-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link header-navigation__link_active" >Сохранённые фильмы</NavLink></li>
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
     <Link to="/"><img className="header-navigation__logo" src={logo1} alt='логотип' /></Link>
				 <nav className="header-navigation__menu">
								<div className="header-navigation__menu">
								<ul className="header-navigation__list">
								  <li className="header-navigation__link-item"><NavLink exact={true} to="/movies" className="header-navigation__link" >Фильмы</NavLink></li>
										<li className="header-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link">Сохранённые фильмы</NavLink></li>
								</ul>
								<Link to="/profile" className="header-navigation__profile"></Link>
       </div>
					</nav>
					<nav className="header-navigation__menu_burger">
						 <button className="header-navigation__menu-button" type="button" onClick={handleOpenMenu}></button>
					</nav>
					<NavigationSideMenu isOpen={isOpen} onClose={handleCloseMenu}/>
					</>)}
{location.pathname === "/"  &&  props.loggedIn === false &&(	 		  
     <>
					<Link to="/"><img className="header-navigation__logo" src={logo2} alt='логотип' /></Link>
					<nav className="header-navigation__menu_start-page">
						 <Link to="/signup" className="header-navigation__registration-button">Регистрация</Link>
							<Link to="/signin"><button className="header-navigation__entrance-button">Вход</button></Link>
					</nav>
					</>)}
					{location.pathname === "/"  &&  props.loggedIn === true &&(	 		  
     <>
					<Link to="/"><img className="header-navigation__logo" src={logo2} alt='логотип' /></Link>
					<nav className="header-navigation__menu">
								<div className="header-navigation__menu">
								<ul className="header-navigation__list">
								  <li className="header-navigation__link-item"><NavLink exact={true} to="/movies" className="header-navigation__link"  >Фильмы</NavLink></li>
										<li className="header-navigation__link-item"><NavLink to="/saved-movies" className="header-navigation__link" >Сохранённые фильмы</NavLink></li>
								</ul>
								<Link to="/profile" className="header-navigation__profile"></Link>
       </div>
					</nav>
					<nav className="header-navigation__menu_burger">
						 <button className="header-navigation__menu-button" type="button" onClick={handleOpenMenu}></button>
					</nav>
					</>)}
					
					</div>
			</div>
	)
}

export default Navigation;