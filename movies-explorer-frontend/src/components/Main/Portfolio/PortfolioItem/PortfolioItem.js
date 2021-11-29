import React from 'react';
import './PortfolioItem.css';
import arrow from '../../../../images/arrow.svg';

function PortfolioItem(props) {

	return(
		 <div className="portfolio-item">
				 <a className="portfolio-item__name-link" href={props.portfolioItemLink} target="_blank" rel="noopener noreferrer">{props.portfolioItemName}</a>
					<a href={props.portfolioItemLink} target="_blank" rel="noopener noreferrer"><img className="portfolio-item__arrow-link" alt="стрелака - переход на сайт" src={arrow} /></a>
			</div>
	)
}

export default PortfolioItem;