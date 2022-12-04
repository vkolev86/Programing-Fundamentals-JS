function hogwarts(input){

    let arr = input.slice();
    let message = arr.shift();
    let currentLine = arr.shift();
    let tempMessage = '';

        while (currentLine !== 'Abracadabra') {

            let token = currentLine.split(' ');
            let command = token[0];

            switch (command) {
                case 'Abjuration':
                    const upperCased = message.toUpperCase(message);
                    console.log(upperCased);
                    break;

                case 'Necromancy':
                    const lowerCased = message.toLowerCase(message);
                    console.log(lowerCased);
                    break;

                case 'Illusion':
                    let index = Number(token[1]);
                    let letter = token[2];
                    if (index <= message.length) {
                        tempMessage = message.substring(0, index) + letter + message.substring(index + 1);
                        message = tempMessage;
                        console.log(`Done!`);
                    } else {
                        console.log(`The spell was too weak.`);
                    }
                break;
                case 'Divination':
                    let substring = token[1];
                    let replacement = token[2];
                    if (message.includes(substring)) {
                        while (message.includes(substring)) {
                            tempMessage = message.replace(substring, replacement);
                            message = tempMessage;
                        }
                    }
                    break;
                case 'Alteration':
                    let removeSubstring = token[1];
                    tempMessage = message.toLowerCase(message).replace(removeSubstring,'');
                    message = tempMessage;
                    console.log(tempMessage);
                default:
                    if (command !== 'Abjuration' && command !== 'Necromancy' && command !== 'Illusion'
                    && command !== 'Divination' && command !== 'Alteration') {
                        console.log(`The spell did not work!`);
                    }
                    break;
            }
            currentLine = arr.shift();
        }
}

hogwarts(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"]);