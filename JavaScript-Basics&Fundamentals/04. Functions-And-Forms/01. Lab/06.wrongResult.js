function solve(a, b, c) {
    let result = a * b * c;

    if (result < 0) {
        return 'Negative';
    } else {
        return 'Positive';
    }
}