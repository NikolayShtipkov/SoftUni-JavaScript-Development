function spiceMustFlow(spice){
    let days = 0;
    let total = 0;

    while(spice >= 100){
        days++;
        total += spice - 26;
        spice -= 10;
    } if (total >= 26) {
        total -= 26;
    }

    console.log(days);
    console.log(total);
}