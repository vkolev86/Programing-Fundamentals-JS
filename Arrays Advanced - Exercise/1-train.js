function train(input) {
    
    var passangerInTrain = input.shift().split(' ').map(Number);
    var maxCapacity = Number(input.shift());

    for (let index = 0; index < input.length; index++) {
        
        let currentRow = input[index].split(' ');

        if (currentRow[0] === 'Add') {
            let newWagonPassangers = Number(currentRow[1]);
            passangerInTrain.push(newWagonPassangers);
        } else {
            for (let j = 0; j < passangerInTrain.length; j++) {
                let passangerInCurrentWagon = passangerInTrain[j];
                if (passangerInCurrentWagon + Number(currentRow[0] <= maxCapacity)) {
                    passangerInTrain[j] += Number(currentRow[0]);
                break;
                }
            }
        }
    }
    console.log(passangerInTrain.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);