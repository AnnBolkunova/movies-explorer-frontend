import React from "react";
import './Portfolio.css';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__subtitle'>Портфолио</h2>
            <ul className='portfolio__list'>
                <li className='portfolio__item'>
                    <a className='animation portfolio__link' href='https://annbolkunova.github.io/how-to-learn/' rel="noopener">
                        <p className="portfolio__name">Статичный сайт</p>
                        <img className='portfolio__arrow' src={arrow} alt="стрелка"></img>
                    </a >
                </li>
                <li className='portfolio__item'>
                    <a className='animation portfolio__link' href='https://annbolkunova.github.io/russian-travel/' rel="noopener">
                        <p className="portfolio__name">Адаптивный сайт</p>
                        <img className='portfolio__arrow' src={arrow} alt="стрелка"></img>
                    </a>
                </li>
                <li className='portfolio__item'>
                    <a className='animation portfolio__link' href='https://mesto.ann-bolkunova.nomoredomains.club' rel="noopener">
                        <p className="portfolio__name">Одностраничное приложение</p>
                        <img className='portfolio__arrow' src={arrow} alt="стрелка"></img>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;