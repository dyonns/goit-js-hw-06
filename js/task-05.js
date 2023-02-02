
const input = document.querySelector("#name-input");
const changeText = document.querySelector("#name-output");

const add = (event) => {
    changeText.textContent = event.currentTarget.value;
    if (changeText.textContent === "") {
        changeText.textContent = "Anonymous";
    }  
};

// ТАК НЕ ПРАЦЮЄ:
// const add = (event) => {    
//     if (changeText.textContent === "") {
//         changeText.textContent = "Anonymous";
//         return
//     }
//    changeText.textContent = event.currentTarget.value;
// };


input.addEventListener("input", add);