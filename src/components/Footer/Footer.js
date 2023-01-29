import React from "react";
import { Routes, Route } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <Routes>
            <Route exact path='/' element={<footer className='footer'>
                <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className='footer__info'>
                    <p className='footer__text'>&copy; 2022 Анна Болкунова</p>
                    <ul className='footer__list'>
                        <li className='footer__item'>Яндекс.Практикум</li>
                        <li className='footer__item'>
                            <a className='animation footer__link' href="https://github.com/AnnBolkunova">Github</a>
                        </li>
                    </ul>
                </div>
            </footer>}>
            </Route>
            <Route exact path='/movies' element={<footer className='footer'>
                <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className='footer__info'>
                    <p className='footer__text'>&copy; 2022 Анна Болкунова</p>
                    <ul className='footer__list'>
                        <li className='footer__item'>Яндекс.Практикум</li>
                        <li className='footer__item'>
                            <a className='animation footer__link' href="https://github.com/AnnBolkunova">Github</a>
                        </li>
                    </ul>
                </div>
            </footer>}>
            </Route>
            <Route exact path='/saved-movies' element={<footer className='footer'>
                <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
                <div className='footer__info'>
                    <p className='footer__text'>&copy; 2022 Анна Болкунова</p>
                    <ul className='footer__list'>
                        <li className='footer__item'>Яндекс.Практикум</li>
                        <li className='footer__item'>
                            <a className='animation footer__link' href="https://github.com/AnnBolkunova">Github</a>
                        </li>
                    </ul>
                </div>
            </footer>}>
            </Route>
        </Routes>
    )
}

export default Footer;