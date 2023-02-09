import { React, useEffect } from "react";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
    const savedSearchName = localStorage.getItem("search-name") || "";
    const savedSearchShorts = (localStorage.getItem("search-isShorts") === "true") ? true : false;

    useEffect(() => {
        const localMovies = JSON.parse(localStorage.getItem('movies') || "[]");
        if (localMovies.length > 0) {
            props.onSearchFilm(savedSearchName, savedSearchShorts);
        }
    }, []);

    return (
        <div className="movies">
            <SearchForm
                onSubmit={props.onSearchFilm}
                savedSearchName={savedSearchName}
                savedSearchShorts={savedSearchShorts}
                page='movies'
            />
            {props.isMoviesApiError && (
                <span className="register__error">Произошла ошибка. Попробуйте еще раз</span>
            )}
            <MoviesCardList
                cards={props.cards}
                onCardLike={props.onCardLike}
                hasCards={props.hasCards}
                loadCards={props.loadCards}
                filteredCards={props.filteredCards}
                isShowPreloader={props.isShowPreloader}
                savedMoviesById={props.savedMoviesById}
            />
        </div>
    )
}

export default Movies;