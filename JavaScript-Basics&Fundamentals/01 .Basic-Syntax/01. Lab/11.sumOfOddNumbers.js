function solve(n){
    let sum = 0;
    for(i = 1; i <= n * 2; i+=2){
        console.log(i);
        sum +=i;
    }
    console.log(`Sum: ${sum}`)
}