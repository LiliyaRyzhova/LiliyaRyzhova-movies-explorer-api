import React from 'react';
import './StartPageInputItem.css';

function StartPageInputItem(props){

	return(
		<div className="input-item">
    <span className="input-item__name">{props.name}</span>
				<input className="input-item__field" type={props.inputType} value={props.inputValue} />
				{props.children}
		</div>
	)
}

export default StartPageInputItem;