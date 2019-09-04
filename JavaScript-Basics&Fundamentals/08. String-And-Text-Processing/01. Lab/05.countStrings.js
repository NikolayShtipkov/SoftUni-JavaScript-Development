function solve(string, word) {
    let arr = string.split(' ');
    let counter = 0;

    for (let i of arr) {
        if (i === word) {
            counter++;
        }
    }

    console.log(counter);
}