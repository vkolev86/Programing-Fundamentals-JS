function sorting(input){

        let sortedArray = input.sort((a, b) => {
            return a.length - b.length || a.localeCompare(b);
        });
        input.forEach(element => {
            console.log(element);
        });
}

sorting(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);