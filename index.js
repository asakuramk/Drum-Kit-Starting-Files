
const drums = document.querySelectorAll(".drum");
const num = drums.length;

for (i = 0; i < num; i++) {
  drums[i].addEventListener("keypress", handlePress)
  drums[i].addEventListener("click", handleClick)
}

function handlePress(event) {
  makesound(event.key);
}

function handleClick() {
  makesound(this.innerHTML);
}

function makesound(key) {
  console.log(key)
  let audio;
  switch (key) {
    case "w":
      audio = new Audio('sounds/tom-1.mp3');
      break;
    case "a":
      audio = new Audio('sounds/snare.mp3');
      break;
    case "s":
      audio = new Audio('sounds/kick-bass.mp3');
      break;
    case "d":
      audio = new Audio('sounds/tom-1.mp3');
      break;
    case "j":
      audio = new Audio('sounds/tom-2.mp3');
      break;
    case "k":
      audio = new Audio('sounds/tom-3.mp3');
      break;
    case "l":
      audio = new Audio('sounds/tom-4.mp3');
      break;
    default:
      console.log("invalid key");
      return;
  }
  audio.play();
}