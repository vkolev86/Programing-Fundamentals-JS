function palindromeIntegers(input) {

    let inputLenght = input.length;

    for (let i = 0; i < inputLenght; i++) {
        
        let numberAsString = input[i].toString();
        let reversedString = numberAsString.split('').reverse().join('');

        if (numberAsString === reversedString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }

}

palindromeIntegers([123,323,421,121]);