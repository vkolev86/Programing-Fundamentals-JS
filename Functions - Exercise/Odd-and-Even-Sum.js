function oddAndEvenSum(number) {

    let numberToString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
 
    for (let i = 0; i < numberToString.length; i++) {
        
        let singelNumer = Number(numberToString[i]);

        if (singelNumer %2 === 0) {
            evenSum += singelNumer;
        } else {
            oddSum += singelNumer;
        }
        
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(3495892137259234);