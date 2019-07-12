function solve(binary) {
    let digit = parseInt(binary, 2);
    console.log(digit)
}


function convert(string) {
    let decimal = +0;
    let bits = +1;
    for(let i = 0; i < string.length; i++) {
        let currNum = +(string[string.length - i - 1]);
        if(currNum === 1) {
            decimal += bits;
        }
        bits *= 2;
    }
    console.log(decimal);
}