import React, { useState } from "react";
import './SearchForm.css';

function SearchForm(props) {

    const [searchName, setSearchName] = useState(props.savedSearchName);
    const [searchShorts, setSearchShorts] = useState(props.savedSearchShorts);
    const [isRequestEmpty, setIsRequestEmpty] = useState(true);
    const [disabled, setDisabled] = useState(true);

    function handleChange(e) {

        if (e.target.value.length > 0) {
            setIsRequestEmpty(false)
            setDisabled(false)
        } else {
            setIsRequestEmpty(true)
            setDisabled(true)
        }
        setSearchName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (searchName.length === 0) {
            setIsRequestEmpty(true);
            return
        }
        setIsRequestEmpty(false);
        props.onSubmit(searchName, searchShorts);
    }

    function handleCheckbox(checkboxstatus) {
        props.onSubmit(searchName, checkboxstatus);
        setSearchShorts(checkboxstatus);
    }

    return (
        <section className="search">
            <form className="search-form"
                onSubmit={handleSubmit}
                noValidate >
                <fieldset className="search-form__fieldset">
                    <input
                        className="search-form__input"
                        type="text"
                        placeholder="Фильм"
                        value={searchName}
                        onChange={handleChange} >
                    </input>
                    <button
                        className="animation button search-form__button"
                        type="submit"
                        aria-label="Найти"
                        disabled={disabled} >
                    </button>
                </fieldset>
                <fieldset className="search-form__fieldset search-form__fieldset_type_check">
                    <h2 className="search-form__title">Короткометражки</h2>
                    <input
                        className='checkbox'
                        type='checkbox'
                        checked={searchShorts}
                        onChange={() => handleCheckbox(!searchShorts)} >
                    </input>
                </fieldset>
            </form>
            <span className="search-form__error">{isRequestEmpty && "Нужно ввести ключевое слово"}</span>
        </section>
    )
}

export default SearchForm;