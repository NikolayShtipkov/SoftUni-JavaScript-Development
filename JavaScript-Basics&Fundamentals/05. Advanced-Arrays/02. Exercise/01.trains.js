function train(arr) {
    let listOfWagons = arr
        .shift()
        .split(' ')
        .map(Number);
        
    let maxCapacity = +arr.shift();

    for(let cmd of arr) {
        let tokens = cmd.split(' ');

        if (tokens.length > 1) {
            listOfWagons.push(+tokens[1]);
        } else {
            for(let i in listOfWagons) {
                let capacity = (+tokens) + listOfWagons[i];

                if (capacity <= maxCapacity) {
                    listOfWagons[i] = capacity;
                    break;
                }
            }
        }
    }
    console.log(listOfWagons.join(' '));
}