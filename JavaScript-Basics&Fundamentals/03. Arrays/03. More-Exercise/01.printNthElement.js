function solve (arr) {
    let step = arr.pop();
    let print = [];

    for(let i = 0; i < arr.length; i += +step) {
        print.push(arr[i]);
    }

    console.log(print.join(' '));
}