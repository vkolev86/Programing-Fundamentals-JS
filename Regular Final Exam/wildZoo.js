function wildZoo(input){
    let currentLine = input.shift();
    let animals = {};
    let arr = [];

    while (currentLine !== 'EndDay') {
        let token = currentLine.split(': ');
        let command = token[0];

        let animalArr = token[1].split('-');
        let animalName = animalArr[0];
        let foodQuantity = Number(animalArr[1]);
        let area = animalArr[2];
        let areaCount = 0;

        let result = arr.find((x) => x.animalName === animalName);
        let index = arr.indexOf(result);

        let areaResult = arr.find((x) => x.area === area);

        switch (command) {
            case 'Add':
                if (result) {
                    arr[index].foodQuantity += foodQuantity;
                } else {
                    animals = {animalName, foodQuantity, area, areaCount};
                    arr.push(animals);
                }
                break;
            case 'Feed':
                if (result) {
                    let resultQuantity = arr[index].foodQuantity -= foodQuantity;
                    if (resultQuantity <= 0) {
                        console.log(`${animalName} was successfully fed`);
                        arr.splice(index, 1)
                    }
                }
                break;
        }
        currentLine = input.shift();
    }
    if (arr.length !== 0) {
        console.log(`Animals:`);
        arr.forEach(e => console.log(` ${e.animalName} -> ${e.foodQuantity}g`));
        console.log(`Areas with hungry animals:`);
        arr.forEach(a => console.log(`${a.area}: ${a.areaCount}`));
    }
    
}

wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"]);