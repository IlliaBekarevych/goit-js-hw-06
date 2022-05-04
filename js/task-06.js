const valueInput = document.querySelector('#validation-input');
const minInputValue = document.querySelector('input[data-length="6"]');

valueInput.addEventListener('blur', () => {
  if (valueInput.value.trim().length === parseInt(minInputValue.dataset.length)) {
    valueInput.classList.add('valid');
    valueInput.classList.remove('invalid');
  } else {
    valueInput.classList.add('invalid');
    valueInput.classList.remove('valid');
  }
});
