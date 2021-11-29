import React from 'react';
import './Footer.css';

function Footer(props){

	return(
		<section className="footer">
			 <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
				<div className="footer__data-container">
					 <p className="footer__date">&copy; 2021</p>
						<ul className="footer__links-container">
							<li className="footer__link-item"><a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a></li>
							<li className="footer__link-item"><a className="footer__link" href="https://github.com/LiliyaRyzhova" target="_blank" rel="noopener noreferrer">Github</a></li>
							<li className="footer__link-item"><a className="footer__link" href="https://ru-ru.facebook.com" target="_blank" rel="noopener noreferrer" >Facebook</a></li>
				</ul>
				</div>
		</section>
	)
}

export default Footer;