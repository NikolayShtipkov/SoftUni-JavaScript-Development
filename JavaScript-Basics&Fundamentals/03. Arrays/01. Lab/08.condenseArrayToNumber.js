function solve(arr) {
    let finalResult = 0;

    if (arr.length === 1) {
        finalResult = arr[0];
    } else {
        let condensedArr = [];

        for(let i = 0; i < arr.length - 1; i++) {

            for(let j = 0; j < arr.length; j++) {
                condensedArr[j] = arr[j] + arr[j + 1];
            }

            arr = condensedArr;
            finalResult = condensedArr[0];
        }
    }

    console.log(finalResult);
}

solve([3])