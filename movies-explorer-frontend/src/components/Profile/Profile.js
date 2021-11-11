import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile(props){

	return(
  <section className="profile">
			 <Header color='black'/>
				<div className="profile__info-block">
					 <p className="profile__greeting">Привет, Виталий!</p>
						<form className="profile__form">
							<div className="profile__form-item">
							 <span className="profile__input-title">Имя</span>
							 <input className="profile__input" type="text" value="Виталий"/>
								</div>
								<div className="profile__form-item">
								<span className="profile__input-title">Email</span>
							 <input className="profile__input" type="text" value="pochta@yandex.ru"/>
								</div>
								<button className="profile__button profile__button_edit" type="submit">Редактировать</button>
						</form>
						<Link to="/signin" className="profile__button profile__button_exit">Выйти из аккаунта</Link>
				</div>
		</section>
	)
}

export default Profile;