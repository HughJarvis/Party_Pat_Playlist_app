document.addEventListener('DOMContentLoaded', () => {
  const newSongform = document.querySelector('#new-song-form');
  newSongform.addEventListener('submit', handleNewSongFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  const greetingButton = document.querySelector('#greeting-button')
  greetingButton.addEventListener('click', handleGreetingButton)
})


let clickCount = 0;
const handleGreetingButton = function (event) {
const speech = document.querySelector('p');
  clickCount += 1;
if (clickCount == 1) {
  speech.textContent = "Thanks! I'm Party Pat from TV's Adventure Time. I have like a really bad problem you can solve. Wanna know how? Click that button again."
} else {
  if (clickCount == 2) {
    speech.textContent = "I'll tell it straight. To survive, my tribe of party bears need a playlist of stone cold bangerz so we can dance all night, every night. Click that button again, go on."
  } else {
    if (clickCount == 3) {
      speech.textContent = "...so I need you to recommend loads of pumping floor fillas I can play my people. I've set up a form below - just fill it in as many times as you like. Yours, Pat."
    }
  }
}
};

  //event.target.dataset.clickcount++;
// console.log(event.target.dataset.clickcount);
// const handleGreetingButtonClick2 = function (event) {
//   const speech = document.querySelector('p')
//
// }
//
//
//   if(event.target.dataset.clickcount==1){
//   speech.textContent = "Thanks! I'm Party Pat from TV's Adventure Time. To survive, my tribe of party bears need a playlist of stone cold bangerz long enough that we can dance all night, every night till the breaka breaka dawn."
// }
//   else if (event.target.dataset.clickcount==2) {
//     greetingButton.removeEventListener('click')
//     greetingButton.addEventListener('click', handleGreetingButtonClick2)
//     speech.textContent = "Does this work"
//   console.log(speech);
// }
// };

const handleNewSongFormSubmit = function (event) {
  event.preventDefault();
  const playlist = document.querySelector('#playlist');
  const song = document.createElement("li")
  song.classList.add('playlist-song');
  song.textContent = `${event.target.title.value} by ${event.target.artist.value} (rated: ${event.target.rating.value})`;
  playlist.appendChild(song);

  const dance = document.createElement('p');
      dance.textContent = `Recommended dance: The ${event.target.dance.value}`;
      dance.classList.add('playlist-song');
      song.appendChild(dance);

      event.target.reset();

  const speech = document.querySelector('p');
  speech.textContent = "Thank you so much! You have excellent taste."
}



// const handleNewSongFormSubmit = function (event) {
//   event.preventDefault();
//
//   const song = createSong(event.target);
//   const playlist = document.querySelector('#playlist');
//   playlist.appendChild(song);
//
//   event.target.reset();
// }
//
// const createSong = function (form) {
//   const song = document.createElement('ol');
//   const songDetails = document.createElement('li')
//   song.classList.add('playlist-song');
//   songDetails.textContent = `${form.title.value} by ${form.artist.value} - rated: ${form.rating.value}`;
//   song.appendChild(songDetails);
// console.log('song is:', songDetails);
//
//   const dance = document.createElement('p');
//     dance.textContent = `Recommended dance: The ${form.dance.value}`;
//     song.appendChild(dance);
//     console.log('dance is:', dance);
//     return song;
//
// }

// const createSong = function (form) {
//   const song = document.createElement('ul');
//   song.classList.add('playlist-song');
//
//   const title = document.createElement('h3');
//   title.textContent = `Title: ${form.title.value}`;
//   song.appendChild(title);
//
//   const artist = document.createElement('h4');
//   artist.textContent = `Artist: ${form.artist.value}`;
//   song.appendChild(artist);
//
//   const rating = document.createElement('h4');
//   rating.textContent = `Rating: ${form.rating.value}`;
//   song.appendChild(rating);
//
//   const dance = document.createElement('p');
//   dance.textContent = `Dance: ${form.dance.value}`;
//   song.appendChild(dance);
//   console.log('dance is:', dance);
//   return song;
// }

const handleDeleteAllClick = function (event) {
  const playlist = document.querySelector('#playlist');
  playlist.innerHTML = '';
}
