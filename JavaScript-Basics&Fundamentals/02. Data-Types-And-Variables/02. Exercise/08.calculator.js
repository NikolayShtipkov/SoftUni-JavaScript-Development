function solve (first, symbol, second){
    switch(symbol){
        case '+':
            console.log((first + second).toFixed(2));
            break;
        case '-':
            console.log((first - second).toFixed(2));
            break;
        case '*':
            console.log((first * second).toFixed(2));
            break;
        case '/':
            console.log((first / second).toFixed(2));
            break;
    }
}