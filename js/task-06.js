const valueInput = document.querySelector('#validation-input');
const minInputValue = document.querySelector('input[data-length="6"]');

valueInput.addEventListener('blur', () => {
  if (valueInput.value.length < minInputValue.dataset.length) {
    valueInput.classList.add('invalid');
    valueInput.classList.remove('valid');
  } else {
    valueInput.classList.add('valid');
    valueInput.classList.remove('invalid');
  }
  console.log(valueInput.value.length);
});
