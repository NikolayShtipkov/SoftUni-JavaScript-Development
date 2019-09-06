function solve(input) {
    let string = input[0];
    let map = new Map();

    for (let i in string) {
        let letter = string[i];

        if (!map.has(letter)) {
            let arr = [i];
            map.set(letter, arr);
        } else {
            let arr = map.get(letter);
            arr.push(i);
            map.set(letter, arr);
        }
    }

    for (let [ key, value ] of map) {
        console.log(`${key}:${value.join('/')}`);
    }
}