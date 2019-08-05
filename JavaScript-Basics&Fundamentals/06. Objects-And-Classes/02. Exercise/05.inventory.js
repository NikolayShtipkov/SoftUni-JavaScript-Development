function solve(input) {
    let heroes = []

    input.forEach(line => {
        let [ name, level, items] = line.split(' / ');
        level = Number(level);
        items = items.split(', ');
        items.sort((a, b) => a.localeCompare(b));

        let hero = {
            name,
            level,
            items
        };

        heroes.push(hero);
    });
    heroes.sort((a, b) => a.level - b.level);

    for(let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
