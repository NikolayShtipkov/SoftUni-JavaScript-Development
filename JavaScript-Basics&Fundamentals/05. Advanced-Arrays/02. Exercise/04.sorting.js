function sort(arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let printArr = [];
    let length = arr.length;

    for(let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            printArr.push(sortedArr.shift());
        } else {
            printArr.push(sortedArr.pop());
        }
    }

    console.log(printArr.join(' '));
}