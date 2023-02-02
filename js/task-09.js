function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(getRandomHexColor());

const colorName = document.querySelector(".color")
const changer = document.querySelector(".change-color")
const body = document.body;


changer.addEventListener("click", () => {
  const color = getRandomHexColor();
  colorName.innerHTML = color;
  body.style.backgroundColor = color;
  console.log(body.style.backgroundColor)
});
