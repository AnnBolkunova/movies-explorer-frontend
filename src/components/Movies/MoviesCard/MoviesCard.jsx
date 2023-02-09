import React from "react";
import { useLocation } from 'react-router-dom';
import apiConfig from '../../../utils/Utils';
import './MoviesCard.css';


const getCardImageSrc = ({ image }) => (
    typeof image === 'object' && image !== null ? `${apiConfig.baseUrl}${image.url}` : image
);

function MoviesCard({ card, liked, onCardLike }) {
    const location = useLocation();

    const durationHours = card.duration >= 60 ? `${Math.floor(card.duration / 60)} ч ` : '';
    const durationMinutes = card.duration === 60 ? '' : `${card.duration % 60} м`;
    const DurationUI = durationHours + durationMinutes;

    const isMoviesPage = location.pathname === '/movies';

    const likeButtonClassName = (
        `button cards__like ${liked ? "cards__like_type_like" : "cards__like_type_inactive"}`
    );

    function handleLikeClick() {
        onCardLike(card);
    }


    return (
        <li className="cards__item">
            <div className="cards__description">
                <h2 className="cards__name">{card.nameRU}</h2>
                <p className="cards__duration">{DurationUI}</p>
                {isMoviesPage
                    ? (<button className={likeButtonClassName} type="button" aria-label="Избранное" onClick={handleLikeClick} />)
                    : (<button className="button cards__like cards__like_type_delete" type="button" aria-label="Избранное" onClick={handleLikeClick} />)}
            </div>
            <img className="cards__image" src={getCardImageSrc(card)} alt={`Кадр из фильма ${card.nameRU}`} />
        </li>
    );
}

export default MoviesCard;