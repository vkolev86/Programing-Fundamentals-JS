function theImitationGame(input){

        let arr = input.slice();
        let message = arr.shift();
        let currentLine = arr.shift();
        let tempMessage = '';

        while (currentLine !== 'Decode') {

            let token = currentLine.split('|');
            let command = token[0];
            

            switch (command) {
                case 'Move':
                    let element = Number(token[1]);
                    let lettersToMove = message.substring(0,element);

                    tempMessage = message.replace(lettersToMove,'');
                    tempMessage += lettersToMove;
                    message = tempMessage;
                    break;

                case 'Insert':
                    let index = Number(token[1]);
                    let letter = token[2];

                    tempMessage = message.split('');
                    tempMessage.splice(index,0,letter);
                    message = tempMessage.join('');
                    break;

                case 'ChangeAll':
                    let substring = token[1];
                    let replacement = token[2];

                    // let res = new RegExp(`${substring}`,"g");
                    // message = message.replace(res, replacement);

                    while (message.includes(substring)) {
                        tempMessage = message.replace(substring, replacement);
                        message = tempMessage;
                    }
                break;
            }
            currentLine = arr.shift();
        }
        console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
    ]);