function matrix(number) {

    let arr = [];

    for (let i = 0; i < number; i++) {
        
        let output = '';

        for (let k = 0; k < number; k++) {
           
            output += `${number} `;
            
        }
        arr.push(output);
    }
    console.log(arr.join('\n'));

}

matrix(7);