import React from 'react';
import avatar from '../../../images/avatar.png';
import './AboutMe.css'

function AboutMe(props){

	return(
  <section className="student" id="student">
			 <div className="student__info">
			   <h4 className="student__name">Лилия</h4>
				  <p className="student__profession">Фронт-енд разработчик, 29 лет</p>
				  <p className="student__description">Я родилась в Москве, где прожила до начала пандемии. Последний год я живу на юге России, рядом с морем.
				  Я завершила обучение на факультете Веб-разработки Яндекс.Практикум в декабре 2021 г., где реализовала несколько учебных проектов. 
				  В настоящее время нахожусь в поиске постоянного места работы.</p>
				  <ul className="student__contact-list">
					   <li><a className="student__list-item" href="https://ru-ru.facebook.com">Facebook</a></li>
					   <li><a className="student__list-item" href="https://github.com/LiliyaRyzhova">Git</a></li>
				  </ul>
				</div>
				<img className="student__image" alt="фотография владельца" src={avatar} />
		</section>
	)
}

export default AboutMe;