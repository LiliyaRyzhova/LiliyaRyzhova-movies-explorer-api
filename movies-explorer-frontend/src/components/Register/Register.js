import React from 'react';
import './Register.css';
import StartPage from '../StartPage/StartPage';
import StartPageInputItem from '../StartPageInputItem/StartPageInputItem';

function Register(props){

	return(
 <section className="sign-up">
		 <StartPage>
				<form className="sign-up__form">
     <StartPageInputItem name='Имя' inputType='text' inputValue='Виталий'/>
					<StartPageInputItem name='E-mail' inputType='email' inputValue='pochta@yandex.ru'/>
					<StartPageInputItem name='Пароль' inputType='password' inputValue='111111'/>
					<p className="sign-up__erorr-field">Что-то пошло не так...</p>
					<button className="sign-up__button" type='submit'>Зарегистрироваться</button>
					</form>
			</StartPage>
	</section>
	)
}

export default Register;