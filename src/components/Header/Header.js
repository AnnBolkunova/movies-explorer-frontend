import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";
import PopupBurger from '../PopupBurger/PopupBurger';


function Header(props) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    function handlePopupClick() { setIsPopupOpen(true) }
    function closePopup() { setIsPopupOpen(false) };

    return (

        <Routes>
            {!props.loggedIn && <Route exact path='/' element={
                <header className="header">
                    <div className="header__content">
                        <Link className='animation logo-link' to="/">
                            <img className="logo-main" src={logo} alt="Логотип" />
                        </Link>
                        <ul className='header__list header__list_type_main'>
                            <li className='header__item'>
                                <Link className='animation header__link' to="/signup">Регистрация</Link>
                            </li>
                            <li className='header__item header__item_type_green'>
                                <Link className='animation header__link header__link_type_black' to="/signin">Войти</Link>
                            </li>
                        </ul>
                    </div>
                </header>
            }>
            </Route>}

            {props.loggedIn && <Route exact path='/' element={
                <><header className="header">
                    <div className="header__content">
                        <Link className='animation logo-link' to="/">
                            <img className="logo-main" src={logo} alt="Логотип" />
                        </Link>
                        <Navigation onPopupClick={handlePopupClick} />
                    </div>
                </header>
                    <PopupBurger
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                    />
                </>
            }>
            </Route>}

            {props.loggedIn && <Route path='/movies' element={
                <><header className="header">
                    <div className="header__content">
                        <Link className='animation logo-link' to="/">
                            <img className="logo-main" src={logo} alt="Логотип" />
                        </Link>
                        <Navigation onPopupClick={handlePopupClick} />
                    </div>
                </header>
                    <PopupBurger
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                    />
                </>
            }>
            </Route>}

            {props.loggedIn && <Route path='/saved-movies' element={
                <><header className="header">
                    <div className="header__content">
                        <Link className='animation logo-link' to="/">
                            <img className="logo-main" src={logo} alt="Логотип" />
                        </Link>
                        <Navigation onPopupClick={handlePopupClick} />
                    </div>
                </header>
                    <PopupBurger
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                    />
                </>
            }>
            </Route>}

            {props.loggedIn && <Route path='/profile' element={
                <><header className="header">
                    <div className="header__content">
                        <Link className='animation logo-link' to="/">
                            <img className="logo-main" src={logo} alt="Логотип" />
                        </Link>
                        <Navigation onPopupClick={handlePopupClick} />
                    </div>
                </header>
                    <PopupBurger
                        isOpen={isPopupOpen}
                        onClose={closePopup}
                    />
                </>
            }>
            </Route>}
        </Routes>
    );
}

export default Header;