const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];  


const items  = document.querySelector("ul#ingredients")

const markup = ingredients
.map((ingredient) => `<li class="item">${ingredient}</li>`)
.join("");
items.insertAdjacentHTML("beforeend", markup);
