const image = document.getElementById("image");

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  image.src = "./assets/start_scene/1.png";
  await wait(1000);
  image.src = "./assets/start_scene/2.png";
  await wait(1000);
  image.src = "./assets/start_scene/3.png";
  await wait(1000);
  image.src = "./assets/start_scene/4.png";
  await wait(1000);
  image.src = "./assets/start_scene/5.png";
  await wait(1000);
  image.src = "./assets/start_scene/6.png";
  await wait(1000);
  image.src = "./assets/start_scene/7.png";
  await wait(1000);
  image.src = "./assets/start_scene/8.png";
  await wait(1000);
  window.location = "/game.html";
}

run();
