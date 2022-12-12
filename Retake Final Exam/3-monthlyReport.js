function monthlyReport(input) {
    let inputArr = input.slice();
    let currentLine = inputArr.shift();
    let distributors = {};
    let clients = {};
    let disArr = [];
    let clientArr = [];
    let totalSum = 0;

    while (currentLine !== "End") {
        let row = currentLine.split(' ');
        let command = row[0];
        let name = row[1];
        let money = Number(row[2]);

        let result = disArr.find((d) => d.name === name);
        let index = disArr.indexOf(result)

        let result2 = clientArr.find((c) => c.name === name);
        let index2 = clientArr.indexOf(result2)

        switch (command) {
            case 'Deliver':
                if (result) {
                    disArr[index].money += money;
                } else {
                    distributors = {name, money};
                    disArr.push(distributors);
                }
            break;

            case 'Return':
                if (disArr[index].money >= money) {
                    disArr[index].money -= money;
                }
                if (disArr[index].money == 0) {
                   delete distributors.name;
                }
            break;

            case 'Sell':
                if (result2) {
                    clientArr[index2].money += money;
                    totalSum += money;
                } else {
                    clients = {name, money};
                    totalSum += money;
                    clientArr.push(clients);
                }
            break;
        }
        currentLine = inputArr.shift();
    }
    if (clientArr.length !== 0) {
        clientArr.forEach(c => console.log(`${c.name}: ${c.money.toFixed(2)}`));
    }
    console.log('-----------');
    if (disArr.length !== 0) {
        disArr.forEach(d => console.log(`${d.name}: ${d.money.toFixed(2)}`));
    }
    console.log('-----------');
    console.log(`Total Income: ${totalSum.toFixed(2)}`);
}

monthlyReport(["Deliver Micro 10000.00",
"Sell Nick 500.00",
"Sell Antony 260.50",
"Return Micro 10000.00",
"End"]);