function solve (n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log('false');
            return;
        } 
    }
    console.log('true');
}