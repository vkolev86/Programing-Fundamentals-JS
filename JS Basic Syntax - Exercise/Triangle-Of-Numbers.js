function triangleOfNumbers(number) {

    for (let index = 1; index <= number; index++) {
        let space = '';
        for (let j = 1; j <= index; j++) {
            space += `${index} `;
        }
        if (number >= 1 && number <= 20) {
            console.log(space);
        } else {
            console.log('Out of space');
        }
    }

}

triangleOfNumbers(10);