const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  const userEmail = event.currentTarget.elements.email.value;
  const userPassword = event.currentTarget.elements.password.value;
 
  const formEl = {
    userEmail,
    userPassword,
  };
  
  if (email.value === '' || password.value === '') {
    return alert('Всі поля мають бути заповнені!');
  }

  event.currentTarget.reset();

  console.log(formEl);
}
