//algorithm based

function solve (n){
    let sum = 0;

    while (n !== 0){
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log(sum);
}

//functional

function sum (num) {
    num = num.toString();
    let numArr = num.split('');
    numArr = numArr.map(Number);
    let result = numArr.reduce((a, b) => a + b, 0);
    
    console.log(result);
}