import { React, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import './Register.css';
import logo from '../../images/logo.svg';


function Register(props) {

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
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
        if (!formValue.name || !formValue.email || !formValue.password) {
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

        setDisabled(true);
        const { name, email, password } = formValue;
        props.onRegister(name, email, password, resetForm, setApiError)
            .then(x => {
                console.log('Данные успешно сохранены!');
            })
            .catch(err => {
                console.log('onRegister catch', err)
                setApiError(err);
                setDisabled(true);
            })
            .finally(() => {
                setDisabled(false);
            });
    }

    return (
        <main className="main-register">
            <Link className='animation logo-register' to="/">
                <img className="logo" src={logo} alt="Логотип" />
            </Link>
            <form className="register" onSubmit={handleSubmit} noValidate>
                <h1 className="register__title">Добро пожаловать!</h1>
                <p className="register__name" htmlFor='name'>Имя</p>
                <input
                    className="register__input"
                    id='name'
                    name='name'
                    type="text"
                    value={formValue.name}
                    onChange={handleChange}
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <span className="register__error">{error.name}</span>
                <p className="register__name" htmlFor='email'>E-mail</p>
                <input
                    className="register__input"
                    id='email'
                    name='email'
                    type="email"
                    value={formValue.email}
                    onChange={handleChange}
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <span className="register__error">{error.email}</span>
                <p className="register__name" htmlFor='password'>Пароль</p>
                <input
                    className="register__input"
                    id='password'
                    name='password'
                    type="password"
                    value={formValue.password}
                    onChange={handleChange}
                    minLength="2"
                    maxLength="30"
                    required>
                </input>
                <span className="register__error">{error.password}</span>
                <span className="register__error">{apiError}</span>
                <button className="button register__button"
                    type="submit"
                    onSubmit={handleSubmit}
                    disabled={disabled}>Зарегистрироваться</button>
            </form>
            <div className="register__signin">
                <p className="register__text">Уже зарегистрированы?</p>
                <Link className="animation register__signin-link" to="/signin">Войти</Link>
            </div>
        </main>
    )
};

export default Register;