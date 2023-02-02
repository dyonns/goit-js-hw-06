const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];  


const items  = document.querySelector("ul#ingredients")



//   const markup = ingredients
// .map((ingredient) => `<li class="item">${ingredient}</li>`)
// .join("");


const arr = [];

ingredients.forEach((ingredient) => {
  const list = document.createElement("li");
  list.classList.add("item")
  list.textContent = ingredient;
  arr.push(list);
})

console.log(arr)

items.insertAdjacentHTML("beforeend", arr.join(""));
