const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsIng=ingredients.map(item => {
  const li = document.createElement("li");
  li.textContent = item;
  li.classList = "js-item";
  return li;
})
document.querySelector("#ingredients").append(...itemsIng)

// const itemsIng = ingredients.map(item => `<li class="js-item">${item}</li>`).join("")
// document.querySelector("#ingredients").insertAdjacentHTML('beforeend',itemsIng)



