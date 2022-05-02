const findCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', findCategories.length);

const ul = document.querySelectorAll('#categories>li');
ul.forEach(el => {
  console.log(
    `Category: ${el.firstElementChild.textContent},
     Elements: ${el.lastElementChild.children.length}`
  );
});
