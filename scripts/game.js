const arrow = document.getElementById("arrow");
const score = document.getElementById("score");
const main = document.querySelector("main");
const resultText = document.getElementById("result-text");
const healthText = document.getElementById("health");
const modal = document.getElementById("modal");
const deadButton = document.getElementById("dead-again");
const homeButton = document.getElementById("home");
health = 3;
healthText.textContent = `Жизни: ${health}/3`;
main.onclick = () => {
  var computedStyle = getComputedStyle(arrow);
  var marginLeft = computedStyle.marginLeft;
  score.textContent = "Тест: " + marginLeft;

  const position = parseInt(marginLeft);
  if (position < 70 || position > 230) {
    resultText.textContent = "Плохо!";
    resultText.style.color = "red";
    if (health != 1) health -= 1;
    else {
      health -= 1;
      modal.style.display = "flex";
      homeButton.style.display = "none";
    }
    healthText.textContent = `Жизни: ${health}/3`;
  } else if (position < 100 || position > 175) {
    resultText.textContent = "Нормально";
    resultText.style.color = "black";
  } else {
    resultText.textContent = "Атлишна!";
    resultText.style.color = "green";
  }

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
