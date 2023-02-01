import React from "react";
import '../../App/App.css';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import image1 from '../../../images/cards/33_words.jpg';
import image2 from '../../../images/cards/kinoalm.jpg';
import image3 from '../../../images/cards/banksy.jpg';
import image4 from '../../../images/cards/baskia.jpg';


function MoviesCardList() {
    const card1 = '33 слова о дизайне';
    const card2 = 'Киноальманах «100 лет дизайна»';
    const card3 = 'В погоне за Бенкси';
    const card4 = 'Баския: Взрыв реальности';

    return (
        <section className="cards">
            <ul className="cards__list">
                <MoviesCard image={image1} name={card1} />
                <MoviesCard image={image2} name={card2} />
                <MoviesCard image={image3} name={card3} />
                <MoviesCard image={image4} name={card4} />
            </ul>
            <button className="button cards__button" type="button">Ещё</button>
        </section>
    )
}

export default MoviesCardList;