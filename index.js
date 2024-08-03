
const drums = document.querySelectorAll(".drum");
const num = drums.length;
for (i = 0; i < num; i++) {
  drums[i].addEventListener("click", handle)
}

function handle() {
  const audio = new Audio('sounds/tom-1.mp3');
  audio.play();

}
