import React from 'react';

import './Tech.css';
import TechElement  from './TechElement/TechElement';

function Tech (props){

return(
	<section className="tech">
		 <h3 className="tech__header">7 технологий</h3>
			<p className="tech__description">На курсе веб-разработки
			 мы освоили технологии, которые применили в дипломном
				 проекте.</p>
					<div className="tech__list">
						<TechElement techElementHeader="HTML" />
						<TechElement techElementHeader="CSS" />
						<TechElement techElementHeader="JS" />
						<TechElement techElementHeader="React" />
						<TechElement techElementHeader="Git" />
						<TechElement techElementHeader="Express.js" />
						<TechElement techElementHeader="Mongo.DB" />
					</div>
	</section>
)
}

export default Tech;