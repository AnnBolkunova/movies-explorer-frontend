import { React, useState } from "react";
import '../../App/App.css';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from '../Preloader/Preloader';


function MoviesCardList(props) {
    const [disabled, setDisabled] = useState(true);


    return (
        <section className="cards">
            <ul className="cards__list">
                {props.cards.map((card, cardId) => (
                    <MoviesCard
                        key={card.id || card.movieId}
                        card={card}
                        liked={props.savedMoviesById[card.id || card.movieId]}
                        savedMovies={props.savedMovies}
                        loadCards={props.loadCards}
                        onCardLike={props.onCardLike}
                    />
                ))}
            </ul>
            {props.isShowPreloader && <Preloader />}
            {!props.isShowPreloader && props.cards.length === 0 && (<span className="register__error">По вашему запросу ничего не найдено</span>)}
            {props.hasCards ?
                <button className="button cards__button" type="button" onClick={props.loadCards}>Ещё</button>
                :
                <button className="button cards__button" type="button" disabled={disabled} onClick={props.loadCards}>Ещё</button>}
        </section>
    )
}

export default MoviesCardList;