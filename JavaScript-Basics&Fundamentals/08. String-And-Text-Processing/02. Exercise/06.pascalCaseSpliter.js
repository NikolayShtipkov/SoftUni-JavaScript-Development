function solve(string) {
    let startIndex = 0;
    let output = [];

    for (let i = 1; i < string.length; i++) {
        let letter = string[i];
        let check = string[i].toLowerCase();

        if (letter !== check) {
            let word = string.substring(startIndex, i);
            output.push(word)
            startIndex = i;
        }
        if (i === string.length - 1) {
            let word = string.substring(startIndex);
            output.push(word);
        }
    }

    console.log(output.join(', '));
}