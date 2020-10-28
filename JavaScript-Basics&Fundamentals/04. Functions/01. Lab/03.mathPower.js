// functional
function solve(num, pow) {
    return Math.pow(num, pow);
}

// for-loop
function task(num, pow) {
    result = 1;

    for(let i = 0; i < pow; i++) {
        result *= num;
    }

    return result;
}