
const input = document.querySelector("#name-input");
const changeText = document.querySelector("#name-output");

const add = (event) => {
    
    
    changeText.textContent = event.currentTarget.value;

    if (changeText.textContent === "") {
        changeText.textContent = "Anonymous";
    }
};

input.addEventListener("input", add);