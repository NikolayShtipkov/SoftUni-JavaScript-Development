function solve(arr) {
    let print = [];

    for(let el of arr) {
        
        if(el < 0) {
            print.unshift(el); 
        } else {
            print.push(el);
        }
    }

    console.log(`${print.join('\n')}`)
}