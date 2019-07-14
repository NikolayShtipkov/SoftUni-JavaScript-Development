function solve(a, b, c) {
    let add = (a, b) => a + b;
    let addResult = add(a, b);
    let subtract = (addResult, c) => addResult - c;

    console.log(subtract(addResult, c)); 
}