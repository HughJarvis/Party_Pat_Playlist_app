document.addEventListener('DOMContentLoaded', () => {
  const newSongform = document.querySelector('#new-song-form');
  newSongform.addEventListener('submit', handleNewSongFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const greetingButton = document.querySelector('#greeting-button');
  greetingButton.addEventListener('click', handleGreetingButton);
})


let clickCount = 0;
const handleGreetingButton = function (event) {
const speech = document.querySelector('p');
  clickCount += 1;
if (clickCount == 1) {
  speech.textContent = "Thanks! I'm Party Pat from TV's Adventure Time. I have like a really bad problem you can solve. Wanna know how? Click that button again."
} else {
  if (clickCount == 2) {
    speech.textContent = "I'll tell it straight. To survive, my tribe of party bears need a playlist of certified stone cold bangers so we can dance all night, every night. Click that button again, go on."
  } else {
    if (clickCount == 3) {
      speech.textContent = "...so I need you to recommend a bunch of pumping floor fillas I can play my people. I've set up a form below - just fill it in as many times as you like. Yours always, Pat. Now scroll down."
    }
  }
}
};


const handleNewSongFormSubmit = function (event) {
  event.preventDefault();
  const playlist = document.querySelector('#playlist');
  const song = document.createElement("li")
  song.classList.add('playlist-song');
  song.textContent = `${event.target.title.value} by ${event.target.artist.value}`;
  playlist.appendChild(song);

  const danceAndRating = document.createElement('p');
      danceAndRating.textContent = `(Rated: ${event.target.rating.value}, Recommended dance: The ${event.target.dance.value})`;
      danceAndRating.classList.add('playlist-song');
      song.appendChild(danceAndRating);

      event.target.reset();

  const speech = document.querySelector('p');
  speech.textContent = "Thank you so much! You have excellent taste."


}


const handleDeleteAllClick = function (event) {
  const playlist = document.querySelector('#playlist');
  playlist.innerHTML = '';
}
