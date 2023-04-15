document.addEventListener('DOMContentLoaded', init);

function init() {
    const API_KEY = 'c4daac4f26faf0faf7dcae44b73466b4';
    const API_READ_ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGRhYWM0ZjI2ZmFmMGZhZjdkY2FlNDRiNzM0NjZiNCIsInN1YiI6IjY0M2E1MTA4ZThkMGI0MTA0N2NkNzRkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EdutRbZ4S3T3ajbQTRYrF6QyQ346AB15sB7kVxna83c';
    const API_ROOT_URL = 'https://api.themoviedb.org/3/'
    const API_IMG_ROOT_URL = 'https://image.tmdb.org/t/p/w1280';
    const API_SEARCH_URL = `${API_ROOT_URL}search/movie?api_key=${API_KEY}&query="`;

    const form = document.querySelector('#form');
    const search = document.querySelector('#search');
    const main = document.querySelector('#main');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = search.value;
        if (searchTerm && searchTerm !== '') {
            fetchWithBearerToken(API_SEARCH_URL + searchTerm, 'GET')
                .then(data => { showMovies(data.results) });
            search.value = '';
        } else {
            window.location.reload();
        }
    });

    discover().then(data => { showMovies(data.results) });

    function discover() {
        const url = `${API_ROOT_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
        const requestType = 'GET';
        return fetchWithBearerToken(url, requestType);
    }

    function showMovies(movies) {
        main.innerHTML = '';
        movies.forEach(movie => {
            const {
                title,
                poster_path,
                vote_average,
                overview } = movie;
            const movieEl = document.createElement('div');
            movieEl.classList.add('movie');
            movieEl.innerHTML = `   <img src="${API_IMG_ROOT_URL + poster_path}" alt="${title}">
                                    <div class="movie-info">
                                        <h3>${title}</h3>
                                        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
                                    </div>
                                    <div class="overview">
                                        <h3>Overview</h3>
                                        ${overview}
                                    </div>
                                `;
            main.appendChild(movieEl);
        });
    }

    function getClassByRate(vote) {
        if (vote >= 8) {
            return 'green';
        } else if (vote >= 5) {
            return 'orange';
        } else {
            return 'red';
        }
    }

    function fetchWithBearerToken(url, requestType) {
        const headers = setAuthorizationHeader();
        return fetch(url, {
            method: requestType,
            headers: headers,
        }).then(response =>
            response.json());
    }

    function setAuthorizationHeader() {
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${API_READ_ACCESS_TOKEN}`);
        return headers;
    }
}


