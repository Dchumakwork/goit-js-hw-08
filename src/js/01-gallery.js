function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padEnd(6, 1)}`;
}

const bodyRef = document.querySelector('body');
const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
stopBtnRef.disabled = true;

startBtnRef.addEventListener('click', onStartBtn);
stopBtnRef.addEventListener('click', onStopBtn);

let changeInterval;

function onStartBtn() {
  startBtnRef.disabled = true;
  stopBtnRef.disabled = false;
  let int = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
  changeInterval = int;
}
function onStopBtn() {
  clearInterval(changeInterval);
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
}
