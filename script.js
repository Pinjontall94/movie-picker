// Bind DOM elements to vars
const form = document.querySelector('form');
const input = document.querySelector("[name='movie']");
const movieList = document.getElementById('movies');
const yankBtn = document.getElementById('yankBtn');

// Side Effects & Life cycle
const existingMovies = JSON.parse(localStorage.getItem('movies')) || [];

const movieData = [];

existingMovies.forEach(y => addMovie(y));

// Update UI
function addMovie(x) {
  movieData.push(x);
  const li = document.createElement('li');
  li.innerHTML = x;
  movieList.appendChild(li);
  localStorage.setItem('movies', JSON.stringify(movieData));
  input.value = '';
}

// Event listeners
form.onsubmit = e => {
  e.preventDefault();
  addMovie(input.value);
}

yankBtn.onclick = () => {
  console.log("add movie yank logic here");
}
