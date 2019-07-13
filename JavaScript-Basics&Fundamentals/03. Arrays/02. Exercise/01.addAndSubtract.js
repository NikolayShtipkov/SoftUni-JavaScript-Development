function solve (originalArr) {
    let modifiedArr = [];

    for(let i = 0; i < originalArr.length; i++) {
        let current = originalArr[i];
        if(current % 2 === 0) {
            modifiedArr.push(current + i);
        } else {
            modifiedArr.push(current - i);
        }
    }
    console.log(modifiedArr);

    let originalSum = 0;
    let modifiedSum = 0;
    for(let i = 0; i < originalArr.length; i++) {
        originalSum += originalArr[i];
        modifiedSum += modifiedArr[i];
    }

    console.log(originalSum);
    console.log(modifiedSum)
}