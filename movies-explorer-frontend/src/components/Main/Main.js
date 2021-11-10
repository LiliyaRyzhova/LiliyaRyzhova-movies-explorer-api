import React from 'react';
import "./Main.css";
import Promo from './Promo/Promo';
import NavTab  from './NavTab/NavTab';
import Title from './Title/Title';
import AboutProject from './AboutProject/AboutProject'
import Tech from './Tech/Tech';
import AboutMe from './AboutMe/AboutMe'
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main(props){

	return(
		<div className="main">
		 	<Header color="green"/>
			 <Promo />
				<NavTab />
				<Title title ="О проекте" />
				<AboutProject />
				<Title title ="Технологии" theme="grey"/>
    <Tech />
				<Title title ="Студент" />
				<AboutMe />
				<Portfolio />
				<Footer />
		</div>
	)
}

export default Main;