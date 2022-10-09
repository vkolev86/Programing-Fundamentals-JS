function equalSums(inputArray) {

    let foundIndex = 'no';

    for (let k = 0; k < inputArray.length; k++) {
        
        let leftSum = 0;
        let rightSum = 0;

        for (let i = 0; i < k; i++) {

            leftSum = leftSum + inputArray[i]
        }
        for (let r = k + 1; r < inputArray.length; r++) {

            rightSum = rightSum + inputArray[r];   
        }
        if (leftSum === rightSum) {
            foundIndex = k;
        }
    }
    console.log(foundIndex);
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);