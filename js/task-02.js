const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const liEl = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const createLiEl = document.createElement('li');
  createLiEl.classList.add('item');
  createLiEl.textContent = option;
  return createLiEl;
});
liEl.append(...elements);
