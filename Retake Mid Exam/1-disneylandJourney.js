function disneylandJourney([cost, months]){

    let money = 0;
    let finalResult = 0;

    for (let month = 1; month <= months; month++) {
        if (month % 2 === 1 && month !== 1) {
            money -= money * 0.16;
        }
        if (month % 4 === 0) {
            money += money * 0.25;
        }
        money += cost * 0.25;
    }

    if (money >= cost) {
        finalResult = money - cost;
        console.log(`Bravo! You can go to Disneyland and you will have ${finalResult.toFixed(2)}lv. for souvenirs.`);
    } else {
        finalResult = cost - money;
        console.log(`Sorry. You need ${finalResult.toFixed(2)}lv. more.`);
    }
}

disneylandJourney(["1000","4"]);