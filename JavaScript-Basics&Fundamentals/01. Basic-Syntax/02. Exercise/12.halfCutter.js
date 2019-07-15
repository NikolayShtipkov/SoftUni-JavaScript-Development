function solve(wood) {
    let counter = 0;

    while(wood >= 1) {
        wood /= 2;
        counter++
    }
    console.log(wood.toFixed(2));
    console.log(counter);
}