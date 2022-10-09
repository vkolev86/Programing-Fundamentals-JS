function commonElements(firstArray, secondArray) {

    for (let index = 0; index < firstArray.length; index++) {
        let firstElement = firstArray[index];
        //console.log(firstElement);
        for (let index = 0; index < secondArray.length; index++) {
            let secondElement = secondArray[index];
            //console.log(secondElement);
            if (firstElement === secondElement) {
                console.log(secondElement);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);