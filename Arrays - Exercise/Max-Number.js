function maxNumber(inputArray) {

    let resultArray = [];

    for (let index = 0; index < inputArray.length; index++) {
        let isBigger = true;
        let currentNumber = inputArray[index];

        for (let k = index + 1; k < inputArray.length; k++) {
            
            if (currentNumber <= inputArray[k]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            resultArray.push(inputArray[index])
        }
        
    }
    console.log(resultArray.join(' '));
}

maxNumber([27, 19, 42, 2, 13, 45, 48]);