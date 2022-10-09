function multiplicationTable(number) {

    for (let index = 1; index <= 10; index++) {
        let result = index * number;
        console.log(`${number} X ${index} = ${result}`);
    }

}

multiplicationTable(5);