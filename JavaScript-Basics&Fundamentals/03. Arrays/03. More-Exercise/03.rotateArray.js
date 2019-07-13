function solve(arr) {
    let rotate = arr.pop();

    for(let i =0; i < rotate; i++) {
        let element = arr.pop();
        arr.unshift(element);
    }

    console.log(arr.join(' '));
}
solve([1, 2, 3, 4, 2])