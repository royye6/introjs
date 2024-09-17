// Assign DOM elements to variables

let generatedPassword = document.getElementById('generatedPassword');
const passwordLength = document.getElementById('passwordLength').value;
const includeNumbers = document.getElementById('includeNumbers').value;
const includeUppercase = document.getElementById('includeUppercase').value;
const includeLowercase = document.getElementById('includeLowercase').value;
const includeSymbols = document.getElementById('includeLowercase').value;
const generateButton = document.getElementById('generateButton')

generateButton.onclick = function generatePassword(passwordLength, includeNumbers,
                                                    includeUppercase, includeLowercase,
                                                    includeSymbols
) {
    // Store numbers, symbols, uppercase and lowercase letters as arrays
    const numbers = ['1','2','3','4','5','6','7','8','9'];
    const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const symbols = ['!','@','#','$','%','&','*'];
    const concatenatedArray = []
    
    concatenatedArray.push(...numbers, ...uppercase, ...lowercase, ...symbols)
    let concatenatedArrayLength = concatenatedArray.length
    
    console.log(concatenatedArray)
    
    const passwordArray = []
    for(let i = 0; i < 20; i++) {
        j = Math.floor(Math.random() * concatenatedArrayLength) * 1;
        randomChar = concatenatedArray[j]
        passwordArray.push(randomChar)
    }
        
    const password = passwordArray.join('')
    console.log(password)
}

// // Execute function when the user clicks on the submit button
// generateButton.onclick = function generatePassword() {
//     // Store numbers, symbols, uppercase and lowercase letters as arrays
//     const numbers = ['1','2','3','4','5','6','7','8','9'];
//     const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//     const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     const concatenatedArray = []
    
//     concatenatedArray.push(...numbers, ...uppercase, ...lowercase)
//     let concatenatedArrayLength = concatenatedArray.length
    
//     console.log(concatenatedArray)
    
//     const passwordArray = []
//     for(let i = 0; i < 20; i++) {
//         j = Math.floor(Math.random() * concatenatedArrayLength) * 1;
//         randomChar = concatenatedArray[j]
//         passwordArray.push(randomChar)
//     }
        
//     const password = passwordArray.join('')
//     console.log(password)

// }



