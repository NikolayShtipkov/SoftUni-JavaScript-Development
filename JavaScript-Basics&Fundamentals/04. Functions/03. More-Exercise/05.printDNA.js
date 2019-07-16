function solve (n) {
    let sequence = 'ATCGTTAGGG'.split('');
    let counter = 0;
    let rows = 1;

    for(let i = 0; i < n; i++) {
        if (rows > 4) {
            rows = 1;
        }

        if (rows === 1) {
            console.log(`**${sequence[counter]}${sequence[counter + 1]}**`);
            counter += 2;
            rows++;

            if (counter > 9) {
                counter = 0;
            }
        } else if (rows === 2) {
            console.log(`*${sequence[counter]}--${sequence[counter + 1]}*`);
            counter += 2;
            rows++;

            if (counter > 9) {
                counter = 0;
            }
        } else if (rows === 3) {
            console.log(`${sequence[counter]}----${sequence[counter + 1]}`);
            counter += 2;
            rows++;

            if (counter > 9) {
                counter = 0;
            }
        } else if (rows === 4) {
            console.log(`*${sequence[counter]}--${sequence[counter + 1]}*`);
            counter += 2;
            rows++;

            if (counter > 9) {
                counter = 0;
            }
        }
    }
}