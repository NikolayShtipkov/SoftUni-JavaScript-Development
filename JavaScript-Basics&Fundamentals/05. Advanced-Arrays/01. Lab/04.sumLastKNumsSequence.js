function solve(n, k) {
    let seq = [1];

    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k);
        let lastThree = seq.slice(start);
        let sum = 0;

        for (let num of lastThree) {
            sum += num;
        }

        seq[current] = sum;
    }

    console.log(seq.join(' '));
}