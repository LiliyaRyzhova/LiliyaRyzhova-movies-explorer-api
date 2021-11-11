import React from 'react';
import './AboutProject.css';


function AboutProject (props){

	return(
  <section className="about" id="about">
			<div className="about__container">
			<div className="about__container-info">
			  <div className="about__column">
				   <h3 className="about__header">Дипломный проект включал 5 этапов</h3>
					  <p className="about__description">Составление плана, работу над бэкендом,
					 вёрстку, добавление функциональности и финальные доработки.</p>
			  </div>
					<div className="about__column">
				   <h3 className="about__header">На выполнение диплома ушло 5 недель</h3>
					  <p className="about__description">У каждого этапа был мягкий и жёсткий дедлайн,
							 которые нужно было соблюдать, чтобы успешно защититься.</p>
			  </div>
			</div>
			<div className="about__illustration">
				 <div className="about__rectangle-1"><p className="about__text">1 неделя</p></div>
					<div className="about__rectangle-2"><p className="about__text about__text_white">4 недели</p></div>
			</div>
			<div className="about__captions">
				<p className="about__caption">Back-end</p>
				<p className="about__caption">Front-end</p>
			</div>
			</div>
		</section>
	)
}

export default AboutProject;