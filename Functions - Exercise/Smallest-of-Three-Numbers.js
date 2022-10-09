function smallestSumbers(firstNum, secondNum, lastNum) {
 
    if (firstNum < secondNum && firstNum < lastNum) {
        console.log(firstNum);
    } else if (secondNum < firstNum && secondNum < lastNum) {
        console.log(secondNum);
    } else {
        console.log(lastNum);
    }
}

smallestSumbers(600,342,123);