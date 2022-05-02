const inputEl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  span.style.fontSize = `${inputEl.value}px`;
  span.style.fontSize = `${event.currentTarget.value}px`;
});
