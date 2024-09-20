function calculate() {
    const calcDisplay = document.getElementById('calcDisplay');
    const calcResult = document.getElementById('resultDisplay')
    const calcButton = document.querySelectorAll('.btn');
    const clearButton = document.getElementById('clear');
    const equalButton = document.getElementById('equal');
    
    calcButton.forEach((button) => {
        button.addEventListener("click", () => {
            calcDisplay.insertAdjacentText('beforeend', `${button.value}`)

            // For debugging
            console.log(`Current span value: ${calcDisplay.textContent}`)
        });
    });

    clearButton.onclick = () => {
        calcDisplay.textContent = ""
        calcResult.textContent = ""
    }

    equalButton.onclick = () => {
        try {
            const result = eval(`${calcDisplay.innerHTML}`)
            calcResult.textContent = `${result}`

            // For debugging
            console.log(result)
        } catch (error) {
            console.log(`Error: ${error}`)
            calcResult.textContent = "Syntax Error"
        }
    }
}

calculate()

        