function addAndSubtract(input) {
    let resultArray = [];
    let sumOriginal = 0;
    let sumResult = 0;

    for (let index = 0; index < input.length; index++) {

        currentNumber = input[index];

        let odd = currentNumber - index;
        let even = currentNumber + index;

        if (currentNumber %2 === 0) {
            resultArray.push(even);
        } else {
            resultArray.push(odd);
        }   
        sumOriginal += currentNumber;
        sumResult += resultArray[index];
    }
    console.log(resultArray);
    console.log(sumOriginal);
    console.log(sumResult);
}

addAndSubtract([5, 15, 23, 56, 35]);