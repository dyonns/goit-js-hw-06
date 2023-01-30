const input = document.querySelector("#validation-input");
const condinion = input.getAttribute("data-length");

let a = "";
input.addEventListener("input", (event) => {
    a = event.currentTarget.value;
});

input.addEventListener("blur", () => {
    if (a.length < condinion) {
        input.classList.add("invalid");
    } else {
        input.classList.add("valid");
        input.classList.replace("invalid", "valid")
    }
})