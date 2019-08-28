function solve(input) {
    let neighborhoods = new Map();

    let existing = input
        .shift()
        .split(', ');

    for (let neighborhood of existing) {
        neighborhoods.set(neighborhood, []);
    }

    for (let tokens of input) {
        let [ neighborhood, person ] = tokens
            .split(' - ');

        if (neighborhoods.has(neighborhood)) {
            neighborhoods.get(neighborhood).push(person);
        }
    }
    let sorted = [...neighborhoods]
        .sort((a, b) => b[1].length - a[1].length);

    for (let [ street, people ] of sorted) {
        console.log(`${street}: ${people.length}`);

        for (let person of people) {
            console.log(`--${person}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',

'Bright Mews - Garry',

'Bright Mews - Andrea',

'Invalid Street - Tommy',

'Abbey Street - Billy'])