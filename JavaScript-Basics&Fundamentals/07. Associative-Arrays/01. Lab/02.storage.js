function solve(input) {
    let output = new Map()

    for (let kvp of input) {
        let [ key, value ] = kvp.split(' ');
        
        if (output.has(key)) {
            let oldValue = +output.get(key);
            output.set(key, +value + oldValue);
        } else {
            output.set(key, value);
        }
    }

    for (let [ key, value ] of output) {
        console.log(key + ' -> ' + value);
    }
}