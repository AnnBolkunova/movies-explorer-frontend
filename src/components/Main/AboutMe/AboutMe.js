import React from "react";
import './AboutMe.css';
import avatar from '../../../images/avatar.jpg';

function AboutMe() {
    return (
        <section className='about-me'>
            <div className='line'>
                <h2 id='about_me' className='title'>Студент</h2>
            </div>
            <article className='two-columns about-me__two-columns'>
                <div className='two-columns__column about-me__column'>
                    <div className='about-me__description'>
                        <h3 className='about-me__name'>Анна</h3>
                        <h3 className='about-me__subtitle'>Фронтенд-разработчик, 36 лет</h3>
                        <p className='about-me__text'>Я из Москвы, работаю QA инженером в IT-компании и хочу развиваться в области разработки. Увлекаюсь дрессировкой собак, музыкой, люблю кататься на сноуборде и плавать.</p>
                    </div>
                    <a className='animation about-me__link' href="https://github.com/AnnBolkunova">Github</a>
                </div>
                <figure className='two-columns__column about-me__image-container'>
                    <img className='avatar' src={avatar} alt="Фото"></img>
                </figure>
            </article>
        </section>
    )
}

export default AboutMe;