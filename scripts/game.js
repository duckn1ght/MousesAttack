const arrow = document.getElementById("arrow");
const scoreText = document.getElementById("score");
const main = document.querySelector("main");
const resultText = document.getElementById("result-text");
const healthText = document.getElementById("health");
const modal = document.getElementById("modal");
const deadButton = document.getElementById("dead-again");
const homeButton = document.getElementById("home");
const totalScore = document.getElementById("total-score");

let health = 3;
let score = 0;
healthText.textContent = `💖Жизни: ${health}/3`;

main.onclick = () => {
  var computedStyle = getComputedStyle(arrow);
  var marginLeft = computedStyle.marginLeft;

  const position = parseInt(marginLeft);
  if (position < 70 || position > 230) {
    resultText.textContent = "Плохо!";
    score -= 50;
    resultText.style.color = "red";
    if (health != 1) health -= 1;
    else {
      health -= 1;
      modal.style.display = "flex";
      homeButton.style.display = "none";
      totalScore.innerHTML = `Ваш счет: ${score}`;
    }
    healthText.textContent = `💖Жизни: ${health}/3`;
  } else if (position < 100 || position > 175) {
    resultText.textContent = "Нормально";
    score += 50;
    resultText.style.color = "black";
  } else {
    resultText.textContent = "Атлишна!";
    score += 100;
    resultText.style.color = "green";
  }
  scoreText.textContent = "⭐Счет: " + score;
  var currentDuration = parseFloat(computedStyle.animationDuration);
  var newDuration = currentDuration - 0.25; // Уменьшаем длительность на 0.5 секунды
  if (newDuration > 0) {
    arrow.style.animationDuration = newDuration + "s";
  }
};
homeButton.onclick = () => {
  window.location = "index.html";
};
deadButton.onclick = () => {
  window.location.reload();
  console.log("reload");
};
document.getElementById("dead-home").onclick = () =>
  (window.location = "index.html");
