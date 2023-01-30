const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];  

let a = document.querySelector("ul#ingredients")

for (const ingredient of ingredients) {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  a.insertAdjacentElement("afterbegin", list);

}
