function gladiatorExpenses(fights, helmet, sword, shield, armor) {

    let totalPrice = 0;
    let brokenShields = 0;
    
    for (let i = 1; i <= fights; i++) {
        if (i % 2 === 0) {
            totalPrice += helmet;
        }
        if (i % 3 === 0) {
            totalPrice += sword;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalPrice += shield;
            brokenShields++;
            if (brokenShields % 2 === 0) {
                totalPrice += armor;
            }
        }
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(23,12.50,21.50,40,200);