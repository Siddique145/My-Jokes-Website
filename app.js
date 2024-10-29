document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    // const jokeButton = document.getElementById('jokeButton');
    const nextButton = document.getElementById('nextButton');

    // Function to fetch and display a joke
    function fetchJoke() {
        fetch('https://v2.jokeapi.dev/joke/Any')
            .then(response => response.json())
            .then(data => {
                if (data.joke) {
                    jokeElement.textContent = data.joke;
                } else {
                    jokeElement.textContent = `${data.setup} - ${data.delivery}`;
                }
            })
            .catch(error => {
                console.error("Error in fetching", error);
                jokeElement.textContent = "Oops! Something went wrong.";
            });
    }

    // Event listeners for the buttons
    // jokeButton.addEventListener('click', fetchJoke);
    nextButton.addEventListener('click', fetchJoke);
});
