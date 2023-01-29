import React from "react";
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';

function MoviesCard(props) {
    const location = useLocation();

    const isMoviesPage = location.pathname === '/movies';

    return (
        <li className="cards__item">
            <div className="cards__description">
                <h2 className="cards__name">{props.card.name}</h2>
                <p className="cards__duration">1ч42м</p>
                {isMoviesPage && <button className="cards__like cards__like_type_like" type="button" aria-label="Избранное" />}
                {!isMoviesPage && <button className="cards__like cards__like_type_delete " type="button" aria-label="Избранное" />}
            </div>
            <a className="cards__link" href="#card={card}">
                <img className="cards__image" src={props.card.link} alt={`Кадр из фильма ${props.card.name}`}></img>
            </a>
        </li>
    );
}

export default MoviesCard;