import React from 'react';
import './Portfolio.css';
import PortfolioItem from './PortfolioItem/PortfolioItem';

function Portfolio(props) {

	return(
		<section className="portfolio">
			<h3 className="portfolio__header">Портфолио</h3>
     <PortfolioItem portfolioItemName="Статичный сайт" portfolioItemLink="https://github.com/LiliyaRyzhova/how-to-learn.git"/>
					<PortfolioItem portfolioItemName="Адаптивный сайт" portfolioItemLink="https://github.com/LiliyaRyzhova/russian-travel.git"/>
					<PortfolioItem portfolioItemName="Одностраничное приложение" portfolioItemLink="https://github.com/LiliyaRyzhova/react-mesto-api-full.git"/>
		</section>
	)
}

export default Portfolio;