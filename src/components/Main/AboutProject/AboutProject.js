import React from "react";
import './AboutProject.css';

function AboutProject() {
    return (
        <section className='about-project'>
            <div className='line'>
                <h2 id='about_project' className='title'>О проекте</h2>
            </div>
            <article className='two-columns'>
                <div className='two-columns__column about-project__column'>
                    <h3 className='about-project__subtitle'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='two-columns__column about-project__column'>
                    <h3 className='about-project__subtitle'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </article>
            <article className='scale'>
                <div className="scale__cell scale__cell_green">
                    <span className="scale__text">1 неделя</span>
                </div>
                <div className="scale__cell scale__cell_grey">
                    <span className="scale__text">4 недели</span>
                </div>
                <div className="scale__cell">
                    <span className="scale__text">Back-end</span>
                </div>
                <div className="scale__cell">
                    <span className="scale__text">Front-end</span>
                </div>
            </article>
        </section>
    )
}

export default AboutProject;