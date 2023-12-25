const jokeEl = document.getElementsByClassName('joke')[0];
const jokeBtn = document.getElementsByClassName('btn')[0];

jokeBtn.addEventListener('click', generateJoke); //listening for click event

generateJoke();

// Using Promises
function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  // Getting data fron API
  fetch('https://icanhazdadjoke.com', config)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      jokeEl.textContent = data.joke;
    })
    .catch(error => {
      console.error('Error fetching joke:', error);
      jokeEl.textContent = 'Failed to fetch joke. Please try again.';
    });
}