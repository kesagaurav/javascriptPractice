const addMovie = document.getElementById('add-modal');
//const addMovie1=document.body.children[1];

console.log(addMovie);
const startAddMovieButton = document.querySelector('header button');

// const backdrop=document.body.firstElementChild;
// console.log(backdrop);

const backdrop = document.getElementById('backdrop');
const cancelMovieButton = addMovie.querySelector('.btn--passive');
const confirmAddButton = cancelMovieButton.nextElementSibling;
const userInputs = addMovie.querySelectorAll('input');
const deleteModal = document.getElementById('delete-modal');

const movies = [];
const entryText = document.getElementById('entry-text');
const deleteMovie = (movieId) => {
  let mi = 0;
  for (const idx of movies) {
    if (idx.id === movieId) {
      break;
    }
    mi++;
  }
  movies.splice(mi, 1);
  const list = document.getElementById('movie-list');
  list.children[mi].remove();
  //list.removeChild(list.children[mi]);
  closeMovieModal();
  updateUI();
};
const cancelMovieDeletion = () => {
  backdropToggle();
  deleteModal.classList.remove('visible');
};
const deleteMovieHandeler = (movieId) => {
  deleteModal.classList.add('visible');
  backdropToggle();
  const cancelButton = deleteMovie.querySelector('.btn--passive');
  let deleteButton = deleteMovie.querySelector('.btn--danger');
 deleteButton.replaceWith(deleteButton.cloneNode(true));
 
  // deleteButton.removeEventListener('click',deleteMovie.bind(null,movieId))
 cancelButton.removeEventListener('click', cancelMovieDeletion);
deleteMovie.querySelector('.btn--danger');
 cancelButton.addEventListener('click', cancelMovieDeletion);
  deleteButton.addEventListener('click', deleteMovie.bind(null, movieId));
  cancelMovieDeletion();
};

const closeMovieModal = () => {
  addMovie.classList.remove('visible');
};

const updateUI = () => {
  if (movies.length == 0) {
    entryText.style.display = 'block';
  } else {
    entryText.style.display = 'none';
  }
};

const renderNewMovieElement = (id, title, image, rating) => {
  const newMovieEle = document.createElement('li');
  newMovieEle.className = 'movie-element';
  newMovieEle.innerHTML = `
        <div class="movie-element__image">
        <img src="${image}" alt="${title}">
        </div>
        <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 star</p>
        </div>
    `;
  newMovieEle.addEventListener('click', deleteMovieHandeler.bind(null, id));
  const list = document.getElementById('movie-list');
  list.append(newMovieEle);
};

const backdropToggle = () => {
  backdrop.classList.toggle('visible');
};

const toogleMovieModal = () => {
  addMovie.classList.toggle('visible');
  backdropToggle();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imgValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imgValue.trim() === '' ||
    imgValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('pls enter the valid values from 1 to 5(rating between 1 to 5)');
    return;
  }
  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imgValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  backdropToggle();
  toogleMovieModal();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  toogleMovieModal();
  cancelMovieDeletion();
  clearMovieInputs();
};

const clearMovieInputs = () => {
  for (const useInput of userInputs) {
    useInput.value = '';
  }
};

const cancelMovie = () => {
  toogleMovieModal();
  backdropToggle();
  clearMovieInputs();
};

startAddMovieButton.addEventListener('click', toogleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelMovieButton.addEventListener('click', cancelMovie);
confirmAddButton.addEventListener('click', addMovieHandler);
