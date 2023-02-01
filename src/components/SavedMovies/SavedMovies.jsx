import React from "react";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies(props) {
    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList cards={props.cards} />
        </div>
    )
};

export default SavedMovies;