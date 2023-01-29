import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <div className="promo__container">
                <h1 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h1>
                <ul className="promo__nav">
                    <li className="promo__nav-item">
                        <Link className='animation promo__link' to="#about_project">О проекте</Link>
                    </li>
                    <li className="promo__nav-item">
                        <Link className='animation promo__link' to="#techs">Технологии</Link>
                    </li>
                    <li className="promo__nav-item">
                        <Link className='animation promo__link' to="#about_me">Студент</Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Promo;