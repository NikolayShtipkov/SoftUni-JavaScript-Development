function solve(arr) {
    let sequence = [arr[0]];
    let highest = arr[0];

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] >= highest) {
            sequence.push(arr[i]);
            highest = arr[i];
        }
    }

    console.log(sequence.join(' '));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);