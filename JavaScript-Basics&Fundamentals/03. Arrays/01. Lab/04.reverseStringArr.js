function solve (arr) {
    for (let i =0; i < arr.length / 2; i++) {
        let currentValue = arr[i];
        let reversedValue = arr[arr.length - 1 - i];
        arr[i] = reversedValue;
        arr[arr.length - 1 - i] = currentValue;
    }
    let result = arr.join(' ');

    console.log(`${result}`);
}