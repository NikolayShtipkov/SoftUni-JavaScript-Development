// solved with array

function solve(arr) {
    let carsInLot = [];

    for(let el of arr) {
        let split = el.split(', ');
        let command = split[0];
        let carNumber = split[1];

        if (command === 'IN') {
            if (!carsInLot.includes(carNumber)) {
                carsInLot.push(carNumber);
            }
        } else {
            if (carsInLot.includes(carNumber)) {
                let index = carsInLot.indexOf(carNumber);
                carsInLot.splice(index, 1);
            }
        }
    }

    if (carsInLot.length > 0) {
        carsInLot.sort((a, b) => a.localeCompare(b));
        console.log(carsInLot.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

// solved with Map()

function parking(input) {
    let carsMap = new Map();

    for (let tokens of input) {
        let [ command, number ] = tokens.split(', ');

        carsMap.set(number, command);
    }

    let carsInLot = [...carsMap]
        .filter((kvp) => kvp[1] === 'IN')
        .map((kvp) => kvp[0]);

    if (carsInLot.length > 0) {
        carsInLot.sort((a, b) => a.localeCompare(b));
        console.log(carsInLot.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}