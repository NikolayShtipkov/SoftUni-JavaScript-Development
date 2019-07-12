function printAndSum(n, m){
    let sum = 0;
    let output = "";
    for(let i = n; i <= m; i++){
        output += i + " ";
        sum += i;
    }
    console.log(output)
    console.log(`Sum: ${sum}`)
}