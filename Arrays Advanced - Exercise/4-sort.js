function sort(input){
    let sortedArray = input.sort((a,b) => a - b);
    let resultArray = [];

    for (let index = 0; index < input.length; index++) {
        let lastElement = sortedArray.pop();
        let firstArray = sortedArray.shift();
        resultArray.push(lastElement);
        resultArray.push(firstArray);
    }
    resultArray.push(sortedArray.pop());
    resultArray.push(sortedArray.shift());

    console.log(resultArray.join(' '));
}

sort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);