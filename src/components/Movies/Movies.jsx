import React from "react";
import './Movies.css';
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "./SearchForm/SearchForm";

function Movies(props) {
    return (
        <div className="movies">
            <SearchForm />
            <MoviesCardList cards={props.cards} />
        </div>
    )
}

export default Movies;