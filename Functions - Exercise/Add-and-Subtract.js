function addSubtract(firsNumber, secondNumber, lastNumber) {
 
    function add(firsNumber, secondNumber) {
        let sumTwoNumbers = firsNumber + secondNumber;
        return sumTwoNumbers;
    }

    let sum = add(firsNumber,secondNumber);

    function subtract(sum, lastNumber) {
        let subtract = sum - lastNumber;
        return subtract;
    }

    let result = subtract(sum,lastNumber);
    console.log(result);
}

addSubtract(1,17,30);