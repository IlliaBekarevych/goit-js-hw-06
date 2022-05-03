const inputEl = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
span.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener('input', event => {
  span.style.fontSize = `${event.currentTarget.value}px`;
});
