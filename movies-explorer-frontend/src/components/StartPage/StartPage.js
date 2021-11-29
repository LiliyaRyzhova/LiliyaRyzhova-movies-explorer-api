import React from 'react';
import './StartPage.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logoStart.svg';

function StartPage(props) {

  const location = useLocation();

  return (
    <main className="start-page">
      <div className="start-page__content">
        <Link to="/"><img className="start-page__logo" src={ logo } alt="логотип" /></Link>
        <h1 className="start-page__title">
          {location.pathname === '/signup' ? 'Добро пожаловать!' : 'Рады видеть!'}
        </h1>
        {props.children}
        {location.pathname === '/signin' && (
          <p className="start-page__text">
            Ещё не зарегистрированы?
            <Link className="start-page__link" to="/signup">
              Регистрация
            </Link>
          </p>
        )}
        {location.pathname === '/signup' && (
          <p className="start-page__text">
            Уже зарегистрированы?
            <Link className="start-page__link" to="/signin">
              Войти
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}

export default StartPage;