function solve(name, area, population, country, postCode) {
    let city = {
        name,
        area,
        population,
        country,
        postCode
    };

    let entries = Object.entries(city);

    for(let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}