function arrayRotation(array, rotation) {

    for (let index = 0; index < rotation; index++) {
        
        let numberToMove = array.shift();
        array.push(numberToMove);
        
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);