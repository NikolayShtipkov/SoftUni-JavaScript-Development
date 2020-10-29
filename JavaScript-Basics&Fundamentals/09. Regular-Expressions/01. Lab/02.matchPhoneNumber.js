function matchNumber(numbers) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/g;

    let validNumbers = [];

    while ((valid = pattern.exec(numbers)) !== null) {
        validNumbers.push(valid[0]);
    }

    console.log(validNumbers.join(', '));
}