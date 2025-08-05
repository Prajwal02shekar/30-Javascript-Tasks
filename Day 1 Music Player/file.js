const songs = [
  {
    title: "Jailer BGM",
    movieName: "Jailer",
    src: "./Assets/jailer_bgm_hard.mp3",
    image: "./Assets/Jailer Image.jpg",
  },
  {
    title: "Beast BGM",
    movieName: "Beast",
    src: "./Assets/beast_bgm_vijay.mp3",
    image: "./Assets/Beast.jpg",
  },
  {
    title: "Master BGM",
    movieName: "Master",
    src: "./Assets/master_the_blaster.mp3",
    image: "./Assets/Master.jpg",
  },
];

let currentSongIndex = 0;

let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");

let songTitle = document.querySelector("h1");
let movieName = document.querySelector("p");
let songImage = document.querySelector(".songImage");

function loadSong(index) {
  let current = songs[index];
  song.src = current.src;
  songTitle.textContent = current.title;
  movieName.textContent = current.movieName;
  songImage.src = current.image;
  song.load();
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

song.onloadedmetadata = () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (song.paused) {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
  } else {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
  }
}

setInterval(() => {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
}, 500);

progress.onchange = () => {
  song.currentTime = progress.value;
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
};

document.querySelectorAll(".controls article")[2].onclick = () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
};

document.querySelectorAll(".controls article")[0].onclick = () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
};

loadSong(currentSongIndex);


song.onended = () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
};
