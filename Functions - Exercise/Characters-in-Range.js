function charactersInRange(firsChar, secondChar) {
 
    let rangeStart = Math.min(firsChar.charCodeAt(), secondChar.charCodeAt());
    let rangeEnd = Math.max(firsChar.charCodeAt(), secondChar.charCodeAt());
    let resultString = '';

    for (let currentChar = rangeStart + 1; currentChar < rangeEnd; currentChar++) {
        let singleChar = String.fromCharCode(currentChar)     

        if (currentChar + 1 === rangeEnd) {
            resultString += `${singleChar}`;
        } else {
            resultString += `${singleChar} `;
        }
    }
    console.log(resultString);
    
}

charactersInRange('#',':');