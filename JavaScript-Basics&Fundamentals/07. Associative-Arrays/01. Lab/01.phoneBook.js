function solve(input) {
    let output = [];

    for (let kvp of input) {
        let [ key, value ] = kvp.split(' ');
        output[key] = value;
    }

    for(let key in output) {
        console.log(`${key} -> ${output[key]}`);
    }
}