function sumDigits(digits) {
    let sum = 0;
    while (digits) {
        sum += digits % 10;
        digits = Math.floor(digits / 10);
    }
    console.log(sum);
}

sumDigits(245678);