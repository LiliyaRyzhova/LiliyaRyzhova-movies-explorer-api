import React from 'react';
import './TechElement.css'

function TechElement (props){

	return(
		<div className="tech-element__rectangle" id="techs">
			<h4 className="tech-element__header">{props.techElementHeader}</h4>
		</div>
	)
}

export default TechElement;