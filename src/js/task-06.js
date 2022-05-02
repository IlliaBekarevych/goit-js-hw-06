const valueInput = document.querySelector('#validation-input');
const minInputValue = document.querySelector('input[data-length="6"]');

valueInput.addEventListener('blur', () => {
  if (valueInput.value.length >= minInputValue.dataset.length) {
    valueInput.classList.add('valid');
  } else {
    valueInput.classList.add('invalid');
  }
  console.log(valueInput.value.length);
});
