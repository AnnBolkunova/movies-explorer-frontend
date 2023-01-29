import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
    // eslint-disable-next-line
    const [loggedIn, setLoggedIn] = useState(true);
    // eslint-disable-next-line
    const [cards, setCards] = useState([
        {
            name: '33 слова о дизайне',
            link: 'https://1.downloader.disk.yandex.ru/preview/7248ec79c631a90d1f917bcc2297c0b76ccdb271416e958a8dd5ed10e0c286b8/inf/aav889LViY80SFUJZROaEhuUb6yTZ7apyWWSIiaDEXv284j0Z8KDyOaqyYxOj14WCkno4Q6Gd4v9uYy1fTIAHQ%3D%3D?uid=1130000047149993&filename=33_words.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000047149993&tknv=v2&size=2545x1328',
            duration: 30
        },
        {
            name: 'Киноальманах «100 лет дизайна»',
            link: 'https://1.downloader.disk.yandex.ru/preview/650ef8db17aaad407d7974fee5693a435217cbc7e13ae36bd38fddbdfbc52601/inf/T1TaAMKd8YBPdA0jFNTMmxuUb6yTZ7apyWWSIiaDEXvCvFoccYHk5z0Y01KT1TGuZRQsEg3Kr1xI6bI0BS4Exg%3D%3D?uid=1130000047149993&filename=kinoalm.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000047149993&tknv=v2&size=2545x1328',
            duration: 45
        },
        {
            name: 'В погоне за Бенкси',
            link: 'https://4.downloader.disk.yandex.ru/preview/c34d111c64f2d0719449bbc9c32c43f726e7ca63d3423640b2b63dcf9495e00a/inf/gTUs4U2YdBUTdfpsJpHoWxuUb6yTZ7apyWWSIiaDEXtPgRi5yRt0qMw0x-DjmcALK9bkAX-3GZn8yvuf6AMP-w%3D%3D?uid=1130000047149993&filename=banksy.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000047149993&tknv=v2&size=2545x1328',
            duration: 35
        },
        {
            name: 'Баския: Взрыв реальности',
            link: 'https://1.downloader.disk.yandex.ru/preview/c24c793c03819beb78aaaa3e2cf602d1318b227f59dd6a4045c8c746533c452c/inf/9IyGGmiZpr8VpyCUs8OjCxuUb6yTZ7apyWWSIiaDEXvdFjWj1orhhXthAIaYVUKQ1UpqL2gyZVEQNMDgrvuSLA%3D%3D?uid=1130000047149993&filename=baskia.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1130000047149993&tknv=v2&size=2545x1328',
            duration: 37
        }
    ]);


    return (
        <div className="page">
            <Header loggedIn={loggedIn} />
            <Routes>

                <Route exact path='/' element={<Main />} />
                <Route path='/movies' element={<Movies cards={cards} />} />
                <Route path='/saved-movies' element={<SavedMovies cards={cards} />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/signin' element={<Login />} />
                <Route path='/signup' element={<Register />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path='/' element={loggedIn ? <Navigate to='/movies' replace /> : <Navigate to='signin' replace />} />

            </Routes>

            <Footer />
        </div>

    );
}

export default App;