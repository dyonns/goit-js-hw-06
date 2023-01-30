function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

const colorName = document.querySelector(".color")
const changer = document.querySelector(".change-color")
const body = document.body;

changer.addEventListener("click", () => {
  colorName.innerHTML = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
  console.log(body.style.backgroundColor)
});
