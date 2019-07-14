function solve(number) {
    let num = number.toString();

    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0;i < num.length; i++) {
        let current = +num[i];

        if(current % 2 === 0) {
            evenSum += current;
        } else if(current % 2 !== 0) {
            oddSum += current;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}