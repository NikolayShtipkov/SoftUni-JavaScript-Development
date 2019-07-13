function mergeArr (firstArray, secondArray){
    let thirdArray = [];

    for(let i = 0; i < firstArray.length; i++) {
        let firstEl = firstArray[i];
        let secondEl = secondArray[i];

        if (i % 2 === 0) {
            thirdArray.push(Number(firstEl) + Number(secondEl))

        } else {
            thirdArray.push(firstEl + secondEl);
        }
    }

    console.log(thirdArray.join(' - '));
}