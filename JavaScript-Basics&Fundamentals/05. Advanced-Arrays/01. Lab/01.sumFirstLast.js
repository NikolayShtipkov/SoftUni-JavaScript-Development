function solve(arr) {
    let first = +arr.shift();
    let second = +arr.pop();

    let result = first + second;

    return result;
}