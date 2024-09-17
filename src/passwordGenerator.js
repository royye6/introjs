// Execute function when the user clicks on the submit button
generateButton.onclick = function generatePassword() {

    // Assign DOM elements to variables
    let generatedPassword = document.getElementById('generatedPassword');
    const passwordLengthInput = document.getElementById('passwordLength');
    const passwordLength = passwordLengthInput.value
    const includeNumbers = document.getElementById('includeNumbers');
    const includeUppercase = document.getElementById('includeUppercase');
    const includeLowercase = document.getElementById('includeLowercase');
    const includeSymbols = document.getElementById('includeSymbols');

    let numbers = [];
    let uppercase = [];
    let lowercase = [];
    let symbols = [];
    
    // Conditionally append elements to concatenatedArray based on user input
    if(includeNumbers.checked) {
        numbers.push('1','2','3','4','5','6','7','8','9');
    }
    if(includeUppercase.checked) {
        uppercase.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    }
    if(includeSymbols.checked) {
        symbols.push('!','@','#','$','%','&','*');
    }
    if(includeLowercase.checked) {
        lowercase.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    }
    
    let concatenatedArray = []

    concatenatedArray.push(...numbers, ...uppercase, ...lowercase, ...symbols)
    let concatenatedArrayLength = concatenatedArray.length
    
    // For debugging
    console.log(concatenatedArray)
    
    // Append a random character from concatenatedArray to the passwordArray based on character index with each iteration
    const passwordArray = []
    for(let i = 0; i < passwordLength; i++) {
        j = Math.floor(Math.random() * concatenatedArrayLength) * 1;
        randomChar = concatenatedArray[j]
        passwordArray.push(randomChar)
    }
        
    const password = passwordArray.join('')

    // For debugging
    console.log(password)

    // Update readonly-input element value with generated password
    generatedPassword.value = password
}

