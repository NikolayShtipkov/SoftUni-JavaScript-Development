function solve(input) {
    let counties = new Map();

    for (let string of input) {
        let [ country, town, price ] = string.split(' > ');

        if (counties.has(country)) {
            let existingTowns = counties.get(country);

            if (existingTowns.has(town)) {
                let existingPrice = existingTowns.get(town);

                if (price < existingPrice) {
                    existingTowns.set(town, price);
                }
            } else {
                existingTowns.set(town, price);
            }
        } else {
            let townsToPriceMap = new Map();
            townsToPriceMap.set(town, price)
            counties.set(country, townsToPriceMap);
        }
    }
    let sortedCountries = [...counties]
        .sort((a, b) => a[0].localCompare(b[0]));

    for (let [country, townsMap] of sortedCountries) {
        let sortedTowns = [...townsMap]
            .sort((a, b) => a[1] - b[1])
            .map(a => `${a[0]} -> ${a[1]}`);

        console.log(`${country} -> ${sortedTowns.join(' ')}`);
    }
}