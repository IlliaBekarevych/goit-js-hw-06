const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const liEl = document.querySelector('#ingredients');
console.log(liEl);

const elements = ingredients.map(option => `<li class="item">${option}</li>`).join('');
console.log(elements);
liEl.innerHTML = elements;
