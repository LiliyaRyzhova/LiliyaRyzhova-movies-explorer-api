import React from 'react';
import './Login.css';
import StartPageInputItem from '../StartPageInputItem/StartPageInputItem';
import StartPage from '../StartPage/StartPage';

function Login(props){

	return(
		<section className="sign-in">
			 <StartPage>
					<form className="sign-in__form">
				<StartPageInputItem name='E-mail' inputType='email' inputValue='pochta@yandex.ru'/>
				<StartPageInputItem name='Пароль' inputType='password' inputValue='111111'/>
				<button className="sign-in__button" type='submit'>Войти</button>
				</form>
				</StartPage>
		</section>
	)
}

export default Login;
