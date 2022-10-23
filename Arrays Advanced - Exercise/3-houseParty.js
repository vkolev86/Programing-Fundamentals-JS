function houseParty(input){

    let guestsArray = [];

    for (const el of input) {
        
        let command = el.split(' ');
        let name = command[0];

        if (command.lenght === 3) {
            if (guestsArray.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guestsArray.push(name);
            }
        } else {
            if (!guestsArray.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let index = guestsArray.indexOf(name);
                guestsArray.splice(index, 1);
            }
        }
    }
    console.log(guestsArray.join('\n'));
}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);