import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { serializeSavedMovie } from '../../utils/Utils';
import { LOCALSTORAGE_JWT, SHORT_DURATION, WINDOW_SIZE_BIG, WINDOW_SIZE_SMALL, INIT_AMOUNT, INIT_AMOUNT_MORE, SMALL_AMOUNT, SMALL_AMOUNT_MORE } from '../../utils/constants';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';


function filterCards(name, isShorts, cards) {
    return cards.filter((card) => {
        const isName = card.nameRU.toLowerCase().includes(name.toLowerCase());
        const isMoviesShorts = isShorts ? card.duration <= SHORT_DURATION : true;
        return isName && isMoviesShorts;
    });
}

function App() {

    const [currentUser, setCurrentUser] = useState({
        name: '',
        email: ''
    });
    const [loggedIn, setLoggedIn] = useState(true);

    const [cards, setCards] = useState(JSON.parse(localStorage.getItem('movies') || '[]'));
    const [savedMovies, setSavedMovies] = useState(JSON.parse(localStorage.getItem('savedMovies') || '[]'));
    const [filteredCards, setFilteredCards] = useState([]);
    const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

    const savedMoviesById = useMemo(() => (
        savedMovies.reduce((acc, movie) => {
            acc[movie.movieId] = movie;
            return acc;
        }, {})
    ), [savedMovies]);

    const [isMoviesApiError, setIsMoviesApiError] = useState(false);

    const [isShowPreloader, setIsShowPreloader] = useState(false);

    const navigate = useNavigate();

    function calcCardsCounter() {
        const counter = { init: INIT_AMOUNT, more: INIT_AMOUNT_MORE };

        if (window.innerWidth < WINDOW_SIZE_BIG) {
            counter.init = INIT_AMOUNT;
            counter.more = INIT_AMOUNT_MORE;
        }
        if (window.innerWidth < WINDOW_SIZE_SMALL) {
            counter.init = SMALL_AMOUNT;
            counter.more = SMALL_AMOUNT_MORE;
        }

        return counter;
    }

    const counter = calcCardsCounter();
    const [cardsCounter, setcardsCounter] = React.useState(counter.init);

    function loadSavedCards() {
        const counters = calcCardsCounter();
        setcardsCounter(cardsCounter + counters.more);
    }

    function tokenCheck() {
        const token = localStorage.getItem(LOCALSTORAGE_JWT);
        mainApi.setToken(token);
        if (token) {
            mainApi.getUserInfo()
                .then((user) => {
                    if (user) {
                        setLoggedIn(true);
                        setCurrentUser(user.data);
                    } else {
                        setLoggedIn(false);
                        navigate('/');
                    }
                })
                .catch((err) => {
                    setLoggedIn(false);
                    console.log(err);
                });
        } else {
            setLoggedIn(false);
        }
    }

    useEffect(() => {
        tokenCheck();
    }, [loggedIn]);

    function handleRegister(name, email, password) {
        return mainApi.register(name, email, password)
            .then(() => {
                navigate('/movies');
            })
            .catch(err => (err.message));
    }

    function handleLogin(email, password) {
        return mainApi.authorize(email, password)
            .then((data) => {
                if (!data.token) throw new Error('Missing jwt');
                localStorage.setItem(LOCALSTORAGE_JWT, data.token);
                setLoggedIn(true);
                navigate('/movies');
            })
            .catch(err => (err.message));
    }

    function handleLogout() {
        localStorage.removeItem(LOCALSTORAGE_JWT);
    }

    function handleUpdateUserInfo(name, email) {
        return mainApi.updateUserInfo(name, email)
            .then((user) => {
                setCurrentUser(user.data);
            })
            .catch(err => {
                throw err;
            });
    }

    function handleSearchFilm(name, isShorts) {
        localStorage.setItem('search-name', name);
        localStorage.setItem('search-isShorts', JSON.stringify(isShorts));

        const filterCardsBound = filterCards.bind(null, name, isShorts);

        if (cards.length === 0) {
            setIsShowPreloader(true);

            moviesApi.getMovies()
                .then((res) => {
                    if (res) {
                        localStorage.setItem('movies', JSON.stringify(res));
                    } else {
                        localStorage.removeItem('movies');
                    }
                    setCards(res);
                    setFilteredCards(filterCardsBound(res));
                })
                .catch(err => { console.log(err); })
                .finally(() => {
                    setIsShowPreloader(false);
                });
        } else {
            setFilteredCards(filterCardsBound(cards));
        }
    }

    function handleSearchSavedFilm(name, isShorts) {
        localStorage.setItem('search-savedname', name);
        localStorage.setItem('search-isShorts-saved', JSON.stringify(isShorts));

        const filterCardsBound = filterCards.bind(null, name, isShorts);

        if (savedMovies.length === 0) {
            setIsShowPreloader(true);

            mainApi.getMovies()
                .then((res) => {
                    if (res && res.data) {
                        localStorage.setItem('savedMovies', JSON.stringify(res.data));
                    } else {
                        localStorage.removeItem('savedMovies');
                    }
                    setSavedMovies(res.data);
                    setFilteredSavedMovies(filterCardsBound(res.data));
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setIsShowPreloader(false);
                });
        } else {
            setFilteredSavedMovies(filterCardsBound(savedMovies));
        }
    }

    //Сохраняем фильм
    function handleCardLike(card) {
        const cardId = card.id || card.movieId;

        if (savedMoviesById[cardId]) {
            mainApi.deleteMovie(savedMoviesById[cardId]._id).then(() => {
                setSavedMovies((prev) => {
                    const filtered = prev.filter(({ movieId }) => movieId !== cardId);
                    localStorage.setItem('savedMovies', JSON.stringify(filtered));
                    return filtered;
                });
                setFilteredSavedMovies((prev) => prev.filter(({ movieId }) => movieId !== cardId));
            });
        } else {
            mainApi.saveMovie(card).then((res) => {
                setSavedMovies((prev) => {
                    const newSavedMovies = [...prev, { ...serializeSavedMovie(card), _id: res.data._id }];
                    localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
                    return newSavedMovies;
                });
            });
        }
    }

    return (
        <div className="page">
            <CurrentUserContext.Provider value={currentUser}>
                <Header loggedIn={loggedIn} email={currentUser.email} />
                <Routes>
                    <Route exact path='/' element={<Main />} />
                    <Route path='/signup' element={<Register onRegister={handleRegister} />} />
                    <Route path='/signin' element={<Login onLogin={handleLogin} />} />
                    <Route path='/profile' element={
                        <ProtectedRoute loggedIn={loggedIn}>
                            <Profile onUpdateUser={handleUpdateUserInfo} onLogout={handleLogout} />
                        </ProtectedRoute>
                    } />
                    <Route path='/movies' element={
                        <ProtectedRoute loggedIn={loggedIn}>
                            <Movies
                                onSearchFilm={handleSearchFilm}
                                isMoviesApiError={isMoviesApiError}
                                filteredCards={filteredCards}
                                cards={filteredCards.filter((c, i) => i < cardsCounter)}
                                loadCards={loadSavedCards}
                                hasCards={filteredCards.length > cardsCounter}
                                isShowPreloader={isShowPreloader}
                                savedMoviesById={savedMoviesById}
                                onCardLike={handleCardLike}
                            />
                        </ProtectedRoute>
                    } />
                    <Route path='/saved-movies' element={
                        <ProtectedRoute loggedIn={loggedIn}>
                            <SavedMovies
                                onSearchSavedFilm={handleSearchSavedFilm}
                                cards={filteredSavedMovies}
                                savedMovies={savedMovies}
                                savedMoviesById={savedMoviesById}
                                isShowPreloader={isShowPreloader}
                                onCardLike={handleCardLike}
                            />
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Footer />
            </CurrentUserContext.Provider>
        </div>

    );
}

export default App;