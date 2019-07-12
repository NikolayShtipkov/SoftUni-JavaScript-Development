function solve (num){
    for(let i = 1; i <= num; i++){
        let firstDigit = Math.floor(i / 10);
        let secondDigit = i % 10;
        let sum = firstDigit + secondDigit;
        let isTrue = sum === 11 || sum === 7 || sum === 5;
        console.log(isTrue ? `${i} -> True` : `${i} -> False`)
    }
}