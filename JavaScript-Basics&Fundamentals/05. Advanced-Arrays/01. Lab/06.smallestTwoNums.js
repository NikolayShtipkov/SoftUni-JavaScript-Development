function solve(input) {
    let sorted = input.sort((a, b) => {
        return a - b;
    });

    let print = sorted.slice(0, 2)

    console.log(print.join(' '));
}