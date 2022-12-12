function wordDeveloping(input){

    let row = input.shift();
    let myWord = '';
    let indexArr = [];
    
    while (row !== "End") {
        let addWord = row.split(' ');
        let command = addWord[0];
        switch (command) {
            case 'Add':
                myWord = myWord + addWord[1];
                break;
            case 'Upgrade':
                for (let index = 0; index < myWord.length; index++) {
                    const element = myWord[index];
                    if (element === addWord[1]) {
                        let myChar = myWord.charCodeAt(index);
                        let myNewChar = String.fromCharCode(myChar+1);
                        let upgrade = myWord.replace(element, myNewChar);
                        myWord = upgrade;
                    }
                }
                break;
            case 'Index':
                for (let index = 0; index < myWord.length; index++) {
                    const element = myWord[index];
                    if (element === addWord[1]) {
                        indexArr.push(index);
                    }    
  
                }
                if (indexArr.length === 0) {
                    console.log("None");
                } else {
                    console.log(indexArr.join(' '));  
                }
                break;
            case 'Remove':
                const searchWord = addWord[1];
                const replaceWith = '';
                const result = myWord.replace(searchWord, replaceWith);
                myWord = result;
                break;
            case 'Print':
                console.log(myWord);
        }
        row = input.shift(input);
    }

}

wordDeveloping(["Add University",
"Print",
"Upgrade n",
"Print",
"Index i",
"Remove sity",
"Print",
"End"]);