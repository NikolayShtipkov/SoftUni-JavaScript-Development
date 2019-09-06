function solve(input) {
    let string = input[0];
    let letterCase = input[1];
    let sum = 0;

    for (let letter of string) {
        let ascii = letter.charCodeAt(0);
        if (letterCase === 'LOWERCASE') {
            if (ascii > 96 && ascii < 123) {
                sum += ascii;
            }
        } else {
            if (ascii > 64 && ascii < 91) {
                sum += ascii;
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}