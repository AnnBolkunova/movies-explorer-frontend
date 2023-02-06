import apiConfig, { serializeSavedMovie } from "./Utils";

class MainApi {
    constructor(apiConfig) {
        this._mainBaseUrl = apiConfig.mainBaseUrl;
        this._headers = apiConfig.headers;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Ошибка: ${res.status}`);
    }

    setToken(token) {
        this._headers.Authorization = `Bearer ${token}`
    }

    register(name, email, password) {
        return fetch(`${this._mainBaseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ name, email, password })
        })
            .then(this._handleResponse);
    };

    authorize(email, password) {
        return fetch(`${this._mainBaseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({ email, password }),
        })
            .then(this._handleResponse);
    }

    getUserInfo() {
        return fetch(`${this._mainBaseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._handleResponse);
    }

    updateUserInfo(name, email) {
        return fetch(`${this._mainBaseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, email }),
        })
            .then(this._handleResponse);
    }

    getMovies() {
        return fetch(`${this._mainBaseUrl}/movies`, {
            headers: this._headers
        })
            .then(this._handleResponse);
    }

    saveMovie(card) {
        return fetch(`${this._mainBaseUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(serializeSavedMovie(card))
        })
            .then(this._handleResponse);
    }

    deleteMovie(id) {
        return fetch(`${this._mainBaseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
            .then(this._handleResponse);
    }
}

const mainApi = new MainApi(apiConfig);
export default mainApi;