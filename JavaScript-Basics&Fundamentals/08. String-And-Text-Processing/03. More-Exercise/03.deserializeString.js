function solve(input) {
    input.pop();

    let arr = [];

    for (let instance of input) {
        let [ letter, tokens ] = instance.split(':');
        let indexes = tokens.split('/');
        
        for (let i of indexes) {
            arr[i] = letter;
        }
    }

    console.log(arr.join(''));
}