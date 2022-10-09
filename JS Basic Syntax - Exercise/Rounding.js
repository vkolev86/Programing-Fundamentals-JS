function rounding(number,toFixed) {
    if (toFixed > 15) {
        toFixed = 15;
    }
    console.log(parseFloat(number.toFixed(toFixed)));
}

rounding(3.1415926535897932384626433832795,2);