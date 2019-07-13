function solve (arr) {
    let step = arr.pop();
    let print = [];

    for(let i = 0; i < arr.length; i += +step) {
        print.push(arr[i]);
    }

    console.log(print.join(' '));
}
solve(['5', '20', '31', '4', '20', '2']);