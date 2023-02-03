
const input = document.querySelector("#name-input");
const changeText = document.querySelector("#name-output");

// const add = (event) => {
//     changeText.textContent = event.currentTarget.value;
//     if (changeText.textContent === "") {
//         changeText.textContent = "Anonymous";
//     }  
// };


const add = (event) => {    
    if (event.currentTarget.value.length === 0) {
        changeText.textContent = "Anonymous";
        return;
    }
    
    changeText.textContent = event.currentTarget.value;
    console.log(input.textContent);
};


input.addEventListener("input", add);