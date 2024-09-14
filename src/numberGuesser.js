const userInput = document.getElementById('userInput').value
const hint = document.getElementById('hint')
const winningNumber = Number(Math.floor(Math.random() * 100) * 1);
 
 document.getElementById('submitButton').onclick = function numberGuesser() {
    if (userInput < winningNumber) {
        hint.textContent = "Too low. Try again"
    } 
    else if (userInput > winningNumber) {
        hint.textContent = "Too high. Try again" 
    }
    else if (userInput === winningNumber) {
        hint.textContent = `Congratulations! ${userInput} is the winning number.` 
    }
    console.log(winningNumber)  
 }