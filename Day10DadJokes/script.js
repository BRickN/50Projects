document.addEventListener('DOMContentLoaded', init);

function init() {
    const jokeEl = document.getElementById('joke');
    const jokeBtn = document.getElementById('joke-btn');
    const apiUrl = 'https://icanhazdadjoke.com/';

    jokeBtn.addEventListener('click', generateJoke)

    generateJoke();

    function generateJoke() {
        const config = {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        }

        try {
            fetch(apiUrl, config)
                .then((res) =>
                    res.json())
                .then((data) => {
                    jokeEl.innerHTML = data.joke;
                });
        } catch (err) {
            jokeEl.innerHTML = 'Sorry, an error occurred. Try again later...';
            console.log(err);
        }
    }
}


