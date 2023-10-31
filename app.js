const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector('.btn');
const p = document.querySelector('.result');

const fetchDadJoke = async () => {
  p.textContent = 'Loading...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    if (!response.ok) {
      throw new Error('There was an error...');
    }
    const data = await response.json();

    p.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    p.textContent = 'There was an error...';
  }
};
fetchDadJoke();
btn.addEventListener('click', () => {
  fetchDadJoke();
});
