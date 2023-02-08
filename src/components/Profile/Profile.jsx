import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import '../App/App.css';
import './Profile.css';


function Profile(props) {

    const currentUser = useContext(CurrentUserContext);

    const [formValue, setFormValue] = useState({
        name: '',
        email: ''
    })
    const [error, setError] = useState({});
    const [isValid, setIsValid] = useState(true);
    const [apiError, setApiError] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setFormValue((state) => ({
            ...state,
            name: currentUser.name,
            email: currentUser.email
        })
        );
    }, [currentUser.name, currentUser.email]);

    React.useEffect(() => {
        if (!isValid || (formValue.name === currentUser.name && formValue.email === currentUser.email)) {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [currentUser.name, currentUser.email, formValue.name, formValue.email, isValid]);

    function handleChange(e) {
        e.preventDefault();

        const { name, value } = e.target;
        setFormValue({
            ...formValue, [name]: value
        })
        setError({
            ...error, [name]: e.target.validationMessage
        });

        setIsValid(e.target.checkValidity());

        console.log(e.target.value);
        console.log(isValid);

        let valueEquals;
        if (e.target.name === 'name') {
            valueEquals = e.target.value === currentUser.name;
        }

        if (e.target.name === 'email') {
            valueEquals = e.target.value === currentUser.email;
        }

        const disabledFlag = !isValid || valueEquals;
        setDisabled(disabledFlag);
        return false;
    }

    function handleSubmit(e) {
        e.preventDefault();

        setDisabled(true);
        const { name, email } = formValue;
        props.onUpdateUser(name, email)
            .then(x => {
                alert('Данные успешно сохранены!')
            })
            .catch(err => {
                console.log('onUpdateUser catch', err)
                setApiError(err);
            })
            .finally(() => {
                setDisabled(false);
            });
    }

    return (
        <main className="main-profile">
            <form className="profile" noValidate>
                <h1 className="profile__title">Привет, {currentUser.name}!</h1>
                <div className="profile__form">
                    <p className="profile__name" htmlFor='name'>Имя</p>
                    <input
                        className="profile__input"
                        id='name'
                        name='name'
                        type="text"
                        value={formValue.name}
                        onChange={handleChange}
                        minLength="2"
                        maxLength="30"
                        required>
                    </input>
                </div>
                <span className="register__error">{error.name}</span>
                <div className="profile__form">
                    <p className="profile__name" htmlFor='email'>E-mail</p>
                    <input
                        className="profile__input"
                        id='email'
                        name='email'
                        type="email"
                        value={formValue.email}
                        onChange={handleChange}
                        required>
                    </input>
                </div>
                <span className="register__error">{error.email}</span>
                <span className="register__error">{apiError}</span>
                <button className="button profile__button" type="submit"
                    onClick={handleSubmit}
                    disabled={disabled}
                >Редактировать</button>
                <button className="button profile__button profile__button_type_link" onClick={props.onLogout}>Выйти из аккаунта</button>
                <button className="button profile__button profile__button_type_save" type='submit'>Сохранить</button>
            </form>
        </main>
    )
};

export default Profile;