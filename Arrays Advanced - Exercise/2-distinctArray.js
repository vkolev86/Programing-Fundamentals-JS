function distinctArray(input){

    let uniqueNumbersArray = [];

    for (let index = 0; index < input.length; index++) {
        
        if (!uniqueNumbersArray.includes(input[index])) {
            uniqueNumbersArray.push(input[index]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);