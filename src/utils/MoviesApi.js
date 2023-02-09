import apiConfig from "./Utils";

class MoviesApi {
    constructor(apiConfig) {
        this._baseUrl = apiConfig.baseUrl;
    }

    _handleResponse = (res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`)
            .then(this._handleResponse);
    }
}

const moviesApi = new MoviesApi(apiConfig);
export default moviesApi;