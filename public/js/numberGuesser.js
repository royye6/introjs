document.getElementById('submitButton').onclick = function numberGuesser() {

    const userInput = document.getElementById('userInput').value
    const hint = document.getElementById('hint')
    const winningNumber = Number(Math.floor(Math.random() * 100) * 1);

    if (userInput < winningNumber) {
        hint.textContent = "Too low. Try again"
    } 
    if (userInput > winningNumber) {
        hint.textContent = "Too high. Try again" 
    }
    if(userInput === winningNumber) {
        hint.textContent = `Congratulations! ${userInput} is the winning number.` 
    }

    // For debugging
    console.log(winningNumber)  
}
