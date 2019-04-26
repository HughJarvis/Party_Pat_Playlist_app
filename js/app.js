document.addEventListener('DOMContentLoaded', () => {
  const newSongform = document.querySelector('#new-song-form');
  newSongform.addEventListener('submit', handleNewSongFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewSongFormSubmit = function (event) {
  event.preventDefault();

  const song = createSong(event.target);
  const playlist = document.querySelector('#playlist');
  playlist.appendChild(song);

  event.target.reset();
}

const createSong = function (form) {
  const song = document.createElement('li');
  song.classList.add('reading-list-item');

  const title = document.createElement('h2');
  title.textContent = `Title: ${form.title.value}`;
  song.appendChild(title);

  const artist = document.createElement('h4');
  artist.textContent = `Artist: ${form.artist.value}`;
  song.appendChild(artist);

  const rating = document.createElement('h4');
  rating.textContent = `Rating: ${form.rating.value}`;
  song.appendChild(rating);

  return song;
}

const handleDeleteAllClick = function (event) {
  const playlist = document.querySelector('#playlist');
  playlist.innerHTML = '';
}
