document.addEventListener('DOMContentLoaded', () => {
  const newSongform = document.querySelector('#new-song-form');
  newSongform.addEventListener('submit', handleNewSongFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const greetingButton = document.querySelector('#greeting-button')
  greetingButton.addEventListener('click', handleGreetingButton)
})

const handleGreetingButton = function (event) {
  const speech = document.querySelector('p')
console.log('speech', speech);
  speech.textContent = "Thanks! I'm Party Pat from TV's Adventure Time. To survive, my tribe of party bears need a playlist of stone cold bangerz long enough that we can dance all night, every night till the breaka breaka dawn."

}




const handleNewSongFormSubmit = function (event) {
  event.preventDefault();

  const song = createSong(event.target);
  const playlist = document.querySelector('#playlist');
  playlist.appendChild(song);

  event.target.reset();
}

const createSong = function (form) {
  const song = document.createElement('li');
  song.classList.add('playlist-song');

  const title = document.createElement('h2');
  title.textContent = `Title: ${form.title.value}`;
  song.appendChild(title);

  const artist = document.createElement('h4');
  artist.textContent = `Artist: ${form.artist.value}`;
  song.appendChild(artist);

  const rating = document.createElement('h4');
  rating.textContent = `Rating: ${form.rating.value}`;
  song.appendChild(rating);

  const dance = document.createElement('h4');
  dance.textContent = `Dance: ${form.dance.value}`;
  song.appendChild(dance);
  console.log('dance is:', dance);
  return song;
}

const handleDeleteAllClick = function (event) {
  const playlist = document.querySelector('#playlist');
  playlist.innerHTML = '';
}
