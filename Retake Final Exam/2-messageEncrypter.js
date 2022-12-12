function messageEncrypter(input){
    let countTags = Number(input.shift());
    pattern = /([\s||*@])(?<tag>[A-Z][a-z]{3,})\1: \[(?<char1>[A-z]+)\]\|\[(?<char2>[A-z]+)\]\|\[(?<char3>[A-z]+)\]\|$/g;

    for (let index = 0; index < countTags; index++) {
        let tagRow = input[index];
        let valid = pattern.exec(tagRow);

        if (valid) {
            while (valid !== null) {
                const tag = valid.groups['tag']
                const firstChar = valid.groups['char1'];
                const secondChar = valid.groups['char2'];
                const lastChar = valid.groups['char3'];
    
                //let result = String.fromCharCode(firstChar, secondChar, lastChar);
                let fisrtAscii = firstChar.charCodeAt(0);
                let secondAscii = secondChar.charCodeAt(0);
                let lastAscii = lastChar.charCodeAt(0);
                console.log(`${tag}: ${fisrtAscii} ${secondAscii} ${lastAscii}`);
                valid = pattern.exec(tagRow);
            }
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

messageEncrypter(["3",
"@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn't be valid",
"*Tagged*: [i][i][i]|",
"Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|"]);