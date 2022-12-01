function partyTime(input){
    let vipList = [];
    let regularList = [];

    let currnetGuest = input.shift();

    while (currnetGuest !== 'PARTY') {
        
        const isVip = isNaN(currnetGuest[0]);

        if (isVip) {
            vipList.push(currnetGuest);
        } else {
            regularList.push(currnetGuest);
        }

        currnetGuest = input.shift();
    }
    let allGuests = regularList.concat(vipList);

    for (const guest of input) {
        allGuests.splice(allGuests.indexOf(guest),1);
    }

    console.log(allGuests.length);

    allGuests.forEach(guest => console.log(guest));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);