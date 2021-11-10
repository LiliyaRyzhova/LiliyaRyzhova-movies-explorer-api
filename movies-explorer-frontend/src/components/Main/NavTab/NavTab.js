import { render } from '@testing-library/react';
import React from 'react';
import './NavTab.css';

function NavTab(props) {
 
	return(
	<nav className="navigation">
	  <ul className="navigation__list">
				 <li><a className="navigation__link" href="#about">О проекте</a></li>
					<li><a className="navigation__link" href="#techs">Технологии</a></li>
					<li><a className="navigation__link" href="#student">Студент</a></li>
			</ul>
	</nav>
	)
}

export default NavTab;