function wash(commands) {
    let value = 0;

    for(let action of commands) {
        if ( action === 'soap') {
            value += 10;
        } else if ( action === 'water') {
            value += (value * 0.2);
        } else if ( action === 'vacuum cleaner') {
            value += (value * 0.25);
        } else if ( action === 'mud') {
            value -= (value * 0.1);
        }
    }

    let result = `The car is ${value.toFixed(2)}% clean.`

    return result;
}