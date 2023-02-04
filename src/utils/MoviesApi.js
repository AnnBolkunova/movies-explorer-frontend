import apiConfig from "./Utils";

class MoviesApi {
    constructor(apiConfig) {
        this._baseUrl = apiConfig.baseUrl;
        this._headers = apiConfig.headers;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            headers: this._headers
        })
            .then(this._handleResponse);
    }
}

const moviesApi = new MoviesApi(apiConfig);
export default moviesApi;