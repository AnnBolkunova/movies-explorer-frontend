import { React, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './Login.css';
import logo from '../../images/logo.svg';


function Login(props) {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [apiError, setApiError] = useState('');
    const [disabled, setDisabled] = useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue, [name]: value
        })
        setError({
            ...error, [name]: e.target.validationMessage
        });
        setIsValid(e.target.checkValidity());
        if (!formValue.email && !formValue.password) {
            setDisabled(true)
        } else {
            setDisabled(false)
        };
    }

    const resetForm = useCallback(
        (newValue = {}, newError = {}, newIsValid = false) => {
            setFormValue(newValue);
            setError(newError);
            setIsValid(newIsValid);
        },
        [setFormValue, setError, setIsValid]
    );


    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = formValue;
        props.onLogin(email, password, resetForm, setApiError)
            .catch(err => console.log(err));
    }

    return (
        <main className="main-login">
            <Link className='animation logo-login' to="/">
                <img className="logo" src={logo} alt="Логотип" />
            </Link>
            <form className="login" onSubmit={handleSubmit} noValidate>
                <h1 className="login__title">Рады видеть!</h1>
                <p className="login__name" htmlFor='email'>E-mail</p>
                <input
                    className="login__input"
                    type="email"
                    id='email'
                    name='email'
                    value={formValue.email}
                    onChange={handleChange}
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <span className="register__error">{error.email}</span>
                <p className="login__name" htmlFor='password'>Пароль</p>
                <input
                    className="login__input"
                    type="text"
                    id='password'
                    name='password'
                    value={formValue.password}
                    onChange={handleChange}
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <span className="register__error">{error.password}</span>
                <span className="register__error">{apiError}</span>
                <button className="button button_bg_black login__button" type="submit" disabled={disabled}>Войти</button>
            </form>
            <div className="login__signup">
                <p className="login__text">Ещё не зарегистрированы?</p>
                <Link className="animation login__signup-link" to="/signup">Регистрация</Link>
            </div>
        </main>
    )
};

export default Login;