function solve(wall) {
    wall = wall.map(Number);
    let totalSpending = [];
 
    while (!wall.every(x => x === 30)) {
        let dailySpending = 0;
        for(let i = 0; i < wall.length; i++) {
            if (wall[i] !== 30){
                wall[i]++;
                dailySpending += 195;
            }
        }
 
        totalSpending.push(dailySpending);
    }
 
    console.log(totalSpending.join(', '));
    let sum = 1900 * totalSpending.reduce((a,b) => a + b, 0);
    console.log(`${sum} pesos`);
}