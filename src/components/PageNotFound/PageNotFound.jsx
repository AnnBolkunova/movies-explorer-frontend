import React from "react";
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <main className="error">
            <h1 className="error__num">404</h1>
            <p className="error__name">Страница не найдена</p>
            <Link className="animation error__button" type="submit" to='/'>Назад</Link>
        </main>
    )
};

export default PageNotFound;