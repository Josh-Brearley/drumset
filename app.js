const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");

document.addEventListener("keydown", (event) => {
  if (event.which == 65) {
    boom.play();
  } else if (event.which == 66) {
    clap.play();
  } else if (event.which == 67) {
    hihat.play()
  } else if (event.which == 68) {
    kick.play()
  } else if (event.which == 69) {
    openhat.play()
  } else if (event.which == 70) {
    ride.play()
  }
});