const currentNumber = document.getElementById('currentNumber');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const resetButton = document.getElementById('resetButton');

value = 0

incrementButton.onclick = () => {
    value += 1
    currentNumber.textContent = `${value}`
}

decrementButton.onclick = () => {
    value -= 1
    currentNumber.textContent = `${value}`
}

resetButton.onclick = () => {
    value = 0
    currentNumber.textContent = `${value}`
}
