import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import NavigationSideMenu from '../Navigation/NavigationSideMenu/NavigationSideMenu';


function Header(props){

	return(
	  <section className={`header header_${props.color}`}>
     <Navigation loggedIn={props.loggedIn}/>
					<NavigationSideMenu />
	  </section>
	)
}

export default Header;