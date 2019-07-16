function solve(a, b, c) {
    let sorted = [a, b, c];
    sorted = sorted.sort((a, b) => {return b - a});

    console.log(sorted.join('\n'));
}