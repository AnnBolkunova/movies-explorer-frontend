import React from "react";
import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <form className="search-form">
                <fieldset className="search-form__fieldset">
                    <input
                        className="search-form__input"
                        type="text"
                        placeholder="Фильм"
                        minLength="2"
                        maxLength="30"
                        required>
                    </input>
                    <button className="animation button search-form__button" type="submit">Найти</button>
                </fieldset>
                <fieldset className="search-form__fieldset search-form__fieldset_type_check">
                    <h2 className="search-form__title">Короткометражки</h2>
                    <input className='checkbox' type='checkbox'></input>
                </fieldset>
            </form>
        </section>
    )
}

export default SearchForm;