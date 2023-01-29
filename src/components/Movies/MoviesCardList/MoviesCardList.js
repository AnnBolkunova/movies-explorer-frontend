import React from "react";
import '../../App/App.css';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    return (
        <section className="cards">
            <ul className="cards__list">
                {props.cards.map((card, index) => {
                    return (<MoviesCard key={index} card={card} />)
                })}
            </ul>
            <button className="button cards__button" type="button">Ещё</button>
        </section>
    )
}

export default MoviesCardList;