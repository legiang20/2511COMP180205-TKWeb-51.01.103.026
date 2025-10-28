const music = document.getElementById("nhac");
const musicBtn = document.getElementById("music");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔇 Dừng nhạc";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Phát nhạc";
  }
});

const backgrounds = [
  "./images/ocean2.png",
  "./images/ocean3.png",
  "./images/ocean4.png"
];

let currentBg = 0;
const bgBtn = document.getElementById("change");

document.body.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center";

bgBtn.addEventListener("click", () => {
  currentBg = (currentBg + 1) % backgrounds.length;
  document.body.style.backgroundImage = `url('${backgrounds[currentBg]}')`;
});
