import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function Title(props){

	return(
		<section className={`title title__theme_${props.theme}`}>
   <h2 className="title__header">{props.title}</h2>
		</section>
	)
}

Title.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Title;


