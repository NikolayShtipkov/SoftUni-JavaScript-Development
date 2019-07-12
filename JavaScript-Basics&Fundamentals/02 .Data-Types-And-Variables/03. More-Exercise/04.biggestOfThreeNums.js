function task(a, b, c) {
    let arr = [a, b, c];
    arr = arr.sort((a, b) => b-a )
    console.log(arr[0]);
}

task(1, 6, 3)