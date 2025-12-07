const video = document.getElementById('myVideo');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function setVolume(vol) {
  video.volume = parseFloat(vol);
}