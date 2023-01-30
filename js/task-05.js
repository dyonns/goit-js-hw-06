
const input = document.querySelector("#name-input");
const changeText = document.querySelector("#name-output");

const add = (event) => {

    changeText.textContent  = event.currentTarget.value;
};

input.addEventListener("input", add);