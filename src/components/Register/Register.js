import React from "react";
import { Link } from "react-router-dom";
import './Register.css';
import logo from '../../images/logo.svg';


function Register() {
    return (
        <main className="main-register">
            <Link className='animation logo-register' to="/">
                <img className="logo" src={logo} alt="Логотип" />
            </Link>
            <form className="register">
                <h1 className="register__title">Добро пожаловать!</h1>
                <p className="register__name">Имя</p>
                <input
                    className="register__input"
                    type="text"
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <p className="register__name">E-mail</p>
                <input
                    className="register__input"
                    type="email"
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <p className="register__name">Пароль</p>
                <input
                    className="register__input"
                    type="text"
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <p className="register__error"> Что-то пошло не так...</p>
                <button className="button register__button" type="submit">Зарегистрироваться</button>
            </form>
            <div className="register__signin">
                <p className="register__text">Уже зарегистрированы?</p>
                <Link className="animation register__signin-link" to="/signin">Войти</Link>
            </div>
        </main>
    )
};

export default Register;