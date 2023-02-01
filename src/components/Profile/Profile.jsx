import React from "react";
import { Link } from "react-router-dom";
import '../App/App.css';
import './Profile.css';


function Profile() {
    return (
        <main className="main-profile">
            <form className="profile">
                <h1 className="profile__title">Привет, Анна!</h1>
                <div className="profile__form">
                    <p className="profile__name">Имя</p>
                    <input className="profile__input" type="text"></input>
                </div>
                <div className="profile__form">
                    <p className="profile__name">E-mail</p>
                    <input className="profile__input" type="text"></input>
                </div>
                <button className="button profile__button" type="submit">Редактировать</button>
                <Link className="button profile__button profile__button_type_link" to='/'>Выйти из аккаунта</Link>
                <button className="button button_bg_black profile__button profile__button_type_save" type='submit'>Сохранить</button>
            </form>
        </main>
    )
};

export default Profile;