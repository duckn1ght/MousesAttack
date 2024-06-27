const arrow = document.getElementById("arrow");
const score = document.getElementById("score");
const main = document.querySelector("main");
main.onclick = () => {
  var computedStyle = getComputedStyle(arrow);
  var marginLeft = computedStyle.marginLeft;
  score.textContent = "Current position: " + marginLeft;

  var currentDuration = parseFloat(computedStyle.animationDuration);
  var newDuration = currentDuration - 0.5; // Уменьшаем длительность на 0.5 секунды
  if (newDuration > 0) {
    arrow.style.animationDuration = newDuration + "s";
  }
};
document.getElementById("home").onclick = () => {
  window.location = "/index.html";
};
