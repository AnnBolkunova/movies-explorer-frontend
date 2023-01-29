import React from "react";
import { Link, useLocation } from "react-router-dom";
import './PopupBurger.css';
import account from '../../images/acc_icon.svg';
import closeIcon from '../../images/close_icon.svg';

function PopupBurger(props) {
    const location = useLocation();

    const isMoviesPage = location.pathname === '/movies';
    const isSavedMoviesPage = location.pathname === '/saved-movies';

    return (
        <div className={`popup ${props.isOpen ? 'popup_type_opened' : ''}`}>
            <div className="popup__container">
                <button className="button-close" type="button" aria-label="close" onClick={props.onClose}>
                    <img className="popup__close-icon" src={closeIcon} alt='Крестик' />
                </button>
                <nav className="popup__nav">
                    <ul className="popup__list">
                        {isMoviesPage &&
                            <>
                                <li className="popup__item">
                                    <Link to='/' className="popup__link">Главная</Link>
                                </li>
                                <li className="popup__item">
                                    <Link to='/movies' className="popup__link  popup__link_type_active">Фильмы</Link>
                                </li>
                                <li className="popup__item">
                                    <Link to='/saved-movies' className="popup__link">Сохраненные фильмы</Link>
                                </li>
                            </>}
                        {isSavedMoviesPage &&
                            <>
                                <li className="popup__item">
                                    <Link to='/' className="popup__link">Главная</Link>
                                </li>
                                <li className="popup__item">
                                    <Link to='/movies' className="popup__link">Фильмы</Link>
                                </li>
                                <li className="popup__item">
                                    <Link to='/saved-movies' className="popup__link popup__link_type_active">Сохраненные фильмы</Link>
                                </li>
                            </>}
                        {!isMoviesPage && !isSavedMoviesPage &&
                            <>
                                <li className="popup__item">
                                    <Link to='/' className="popup__link popup__link_type_active">Главная</Link>
                                </li>
                                <li className="popup__item">
                                    <Link to='/movies' className="popup__link">Фильмы</Link>
                                </li>
                                <li className="popup__item">
                                    <Link to='/saved-movies' className="popup__link">Сохраненные фильмы</Link>
                                </li>
                            </>}
                    </ul>
                    <ul className='popup__list'>
                        <li className='popup__item'>
                            <Link className='popup__link popup__link_type_account' to="/profile">
                                <p className="popup__account">Аккаунт</p>
                                <img className="popup__account-icon" src={account} alt='Иконка аккаунта' />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default PopupBurger;