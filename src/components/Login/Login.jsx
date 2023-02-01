import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import logo from '../../images/logo.svg';


function Login() {
    return (
        <main className="main-login">
            <Link className='animation logo-login' to="/">
                <img className="logo" src={logo} alt="Логотип" />
            </Link>
            <form className="login">
                <h1 className="login__title">Рады видеть!</h1>
                <p className="login__name">E-mail</p>
                <input
                    className="login__input"
                    type="email"
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <p className="login__name">Пароль</p>
                <input
                    className="login__input"
                    type="text"
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <button className="button login__button" type="submit">Войти</button>
            </form>
            <div className="login__signup">
                <p className="login__text">Ещё не зарегистрированы?</p>
                <Link className="animation login__signup-link" to="/signup">Регистрация</Link>
            </div>
        </main>
    )
};

export default Login;