const input = document.querySelector("#validation-input");
const condinion = input.getAttribute("data-length");




input.addEventListener("blur", (event) => {
    const text = event.currentTarget.value;
    if (text.length == condinion) {
        input.classList.add("valid");
        input.classList.replace("invalid", "valid")
    } else {
        input.classList.add("invalid");
        input.classList.replace("valid", "invalid");
    }
})