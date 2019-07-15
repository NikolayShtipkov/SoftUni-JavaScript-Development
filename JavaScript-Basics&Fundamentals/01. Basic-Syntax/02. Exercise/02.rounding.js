function solve(num, count) {
    
    if (count > 15) {
        count = 15;
    }

    let roundedNum = parseFloat(num.toFixed(count));

    console.log(roundedNum);
}