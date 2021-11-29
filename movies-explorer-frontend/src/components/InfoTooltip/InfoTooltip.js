import React from 'react';
import './InfoTooltip.css';

function InfoTooltip(props) {

	return (
		<div className={`infoTooltip ${props.isOpen ? "infoTooltip_opened" : " " }`}>
			<div className='infoTooltip_overlay' >
		  <div className='infoTooltip_conteiner' >
			   <span className={`infoTooltip_image__${props.status.img}`}></span>
			   <h3 className='infoTooltip_header'>{props.status.text}</h3>
			   <button className="infoTooltip__close-button " type="button" onClick={props.onClose}></button>
		   </div>
				</div>
		</div>
	)

}

export default InfoTooltip;