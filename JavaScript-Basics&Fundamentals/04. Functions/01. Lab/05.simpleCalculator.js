function solve(firstNum, secondNum, operator) {
    
    if (operator === 'add') {
        return firstNum + secondNum;
    } else if (operator === 'subtract') {
        return firstNum - secondNum;
    } else if (operator === 'multiply') {
        return firstNum * secondNum;
    } else if (operator === 'divide') {
        return firstNum / secondNum;
    }
}