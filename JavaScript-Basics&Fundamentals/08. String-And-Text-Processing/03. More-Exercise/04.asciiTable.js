function solve(input) {
    let first = input[0].charCodeAt(0);
    let second = input[1].charCodeAt(0);
    let string = input[2];
    let sum = 0;

    for (let char of string) {
        let code = char.charCodeAt(0);

        if (first > second) {
            if (code < first && code > second) {
                sum += code;
            }
        } else {
            if (code > first && code < second) {
                sum += code;
            }
        }
    }

    console.log(sum);
}