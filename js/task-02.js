const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];  


const items  = document.querySelector("ul#ingredients")

const arr = [];

ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.classList.add("item")
  list.textContent = ingredient;
  arr.push(list);
})


items.append(...arr);
