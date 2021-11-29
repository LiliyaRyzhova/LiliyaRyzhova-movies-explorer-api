import React from 'react';
import './StartPageInputItem.css';

function StartPageInputItem(props){

	return(
		<div className="input-item">
    <span className="input-item__name">{props.title}</span>
				<input className="input-item__field" type={props.inputType} value={props.inputValue} required={true} name={props.inputName} onChange={props.onChange}/>
				{props.children}
		</div>
	)
}

export default StartPageInputItem;