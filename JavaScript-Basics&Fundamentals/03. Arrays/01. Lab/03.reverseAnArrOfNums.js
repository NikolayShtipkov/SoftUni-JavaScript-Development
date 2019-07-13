function solve(n, inputArr) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        let currentNum = inputArr[n - 1 - i];
        arr.push(currentNum);
    }

    console.log(arr.join(' '));
}