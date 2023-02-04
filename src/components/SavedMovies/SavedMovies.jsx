import { React, useEffect } from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
    const savedSearchName = localStorage.getItem("search-savedname") || "";
    const savedSearchShorts = (localStorage.getItem("search-isShorts-saved") === "true") ? true : false;
    useEffect(() => {
        props.onSearchSavedFilm(savedSearchName, savedSearchShorts);
    }, []);

    return (
        <div className="movies">
            <SearchForm
                onSubmit={props.onSearchSavedFilm}
                savedSearchName={savedSearchName}
                savedSearchShorts={savedSearchShorts}
            />
            <MoviesCardList
                cards={props.cards}
                savedMovies={props.savedMovies}
                savedMoviesById={props.savedMoviesById}
                isShowPreloader={props.isShowPreloader}
                onCardLike={props.onCardLike}
            />
        </div>
    )
}

export default SavedMovies;