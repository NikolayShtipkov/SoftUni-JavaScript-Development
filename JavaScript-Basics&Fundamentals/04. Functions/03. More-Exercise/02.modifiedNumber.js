function modify(number) {
    let digits = number
                .toString()
                .split('')
                .map(Number);
    
    let sum = digits
            .reduce((a, b) => a + b);
    
    let averge = sum / digits.length;

    while(averge <= 5) {
        digits.push(9);
        sum += 9;
        averge = sum / digits.length;
    }

    let result = digits.join('');

    return result;
}