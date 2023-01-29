import React from "react";
import { Link, useLocation } from "react-router-dom";
import './Navigation.css';
import '../Header/Header.css';
import account from '../../images/acc_icon.svg';

function Navigation(props) {
    const location = useLocation();

    const isMoviesPage = location.pathname === '/movies';
    const isSavedMoviesPage = location.pathname === '/saved-movies';
    return (
        <>
            <ul className='navigation'>
                {isMoviesPage &&
                    <>
                        <li className='navigation__item'>
                            <Link className='animation navigation__link navigation__link_active' to='/movies'>Фильмы</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link className='animation navigation__link' to='/saved-movies'>Сохраненные фильмы</Link>
                        </li>
                    </>}
                {isSavedMoviesPage &&
                    <>
                        <li className='navigation__item'>
                            <Link className='animation navigation__link' to='/movies'>Фильмы</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link className='animation navigation__link navigation__link_active' to='/saved-movies'>Сохраненные фильмы</Link>
                        </li>
                    </>}
                {!isMoviesPage && !isSavedMoviesPage &&
                    <>
                        <li className='navigation__item'>
                            <Link className='animation navigation__link' to='/movies'>Фильмы</Link>
                        </li>
                        <li className='navigation__item'>
                            <Link className='animation navigation__link' to='/saved-movies'>Сохраненные фильмы</Link>
                        </li>
                    </>}
            </ul>
            <ul className='header__list'>
                <li className='header__item'>
                    <Link className='animation header__link' to="/profile">
                        <p className="header__account">Аккаунт</p>
                        <img className="header__account-icon" src={account} alt='Иконка аккаунта' />
                    </Link>
                </li>
            </ul>


            <div className="header__container-burger">
                <button type="button" className="header__burger" onClick={props.onPopupClick}></button>
            </div>
        </>

    )
};

export default Navigation;