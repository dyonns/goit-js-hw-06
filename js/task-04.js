
let counterValue = 0;

const removeListenerBtn = document.querySelector('[data-action="decrement"]');
const addListenerBtn = document.querySelector('[data-action="increment"]');

const add = () => {
    counterValue += 1;
    document.querySelector('#value').innerHTML = counterValue;
};

const sub = () => {
    counterValue -= 1;
    document.querySelector('#value').innerHTML = counterValue;
};

addListenerBtn.addEventListener("click", add);
removeListenerBtn.addEventListener("click", sub);
