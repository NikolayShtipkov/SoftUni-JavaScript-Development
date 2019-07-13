function equal (firstArr, secondArr) {
    
    for(let i = 0; i < firstArr.length; i++) {
        firstArr[i] = +(firstArr[i])
    }
    for(let i = 0; i < secondArr.length; i++) {
        secondArr[i] = +(secondArr[i])
    }

    let sum = 0;
    let equal = true;

    for( let num of firstArr) {
        sum += num;
    }

    for(let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            equal = false;
            break;
        }
    }
    if(equal) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}