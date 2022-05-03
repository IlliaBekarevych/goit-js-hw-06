const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function chengeColorBtn() {
  const colorEl = getRandomHexColor();
  spanEl.textContent = colorEl;
  bodyEl.style.backgroundColor = colorEl;
}

btnEl.addEventListener('click', chengeColorBtn);
