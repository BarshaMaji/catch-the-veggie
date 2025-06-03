const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

let score = 0;
let timeLeft = 30;
let gameInterval;
let timerInterval;

function randomVeggie() {
  const veggies = ["🥕", "🍅", "🥦", "🌽", "🍆", "🥒", "🧅", "🫑", "🧄", "🥬"];
  return veggies[Math.floor(Math.random() * veggies.length)];
}

function createVeggie() {
  const veggie = document.createElement("div");
  veggie.classList.add("veggie");
  veggie.innerText = randomVeggie();
  veggie.style.left = Math.random() * 90 + "%";
  veggie.style.top = "0%";

  veggie.addEventListener("click", () => {
    score += 1;
    scoreDisplay.textContent = score;
    veggie.remove();
  });

  gameArea.appendChild(veggie);

  setTimeout(() => {
    if (gameArea.contains(veggie)) {
      veggie.remove();
    }
  }, 5000);
}

function startGame() {
  gameInterval = setInterval(createVeggie, 800);

  timerInterval = setInterval(() => {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);

  // Remove all veggies
  document.querySelectorAll(".veggie").forEach(v => v.remove());

  // Show final score
  setTimeout(() => {
    alert(`🎉 Time's up!\nYour final score: ${score}`);
  }, 100);
}

startGame();
