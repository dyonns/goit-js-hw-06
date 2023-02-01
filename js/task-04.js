
let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const add = () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
};

const sub = () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
};

incrementBtn.addEventListener("click", add);
decrementBtn.addEventListener("click", sub);
