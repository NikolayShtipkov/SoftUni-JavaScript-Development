function solve(input) {
    let legendaryMaterials = new Map([
        ['shards', 0],
        ['fragments', 0],
        ['motes', 0]
    ]);
    
    let stash = new Map();
    let givenMaterials = input.split(' ');

    for (let i = 0; i < givenMaterials.length; i += 2) {
        let quantity = givenMaterials[i];
        let material = givenMaterials[i + 1].toLowerCase();

        if (material === 'shards' || material === 'fragments' || material === 'motes') {
            let oldQuantity = legendaryMaterials.get(material);

            if (material === 'shards') {
                legendaryMaterials.set(material, +quantity + +oldQuantity);

                if (legendaryMaterials.get(material) >= 250) {
                    let check = legendaryMaterials.get(material)
                    legendaryMaterials.set(material, check - 250)
                    console.log('Shadowmourne obtained!');
                    break;
                }
            } else if (material === 'fragments') {
                legendaryMaterials.set(material, +quantity + +oldQuantity);

                if (legendaryMaterials.get(material) >= 250) {
                    let check = legendaryMaterials.get(material)
                    legendaryMaterials.set(material, check - 250)
                    console.log('Valanyr obtained!');
                    break;
                }
            } else if (material === 'motes') {
                legendaryMaterials.set(material, +quantity + +oldQuantity);

                if (legendaryMaterials.get(material) >= 250) {
                    let check = legendaryMaterials.get(material)
                    legendaryMaterials.set(material, check - 250)
                    console.log('Dragonwrath obtained!');
                    break;
                }
            }
        } else {
            if (!stash.has(material)) {
                stash.set(material, quantity);
            } else {
                let oldQuantity = stash.get(material);
                stash.set(material, +quantity + +oldQuantity);
            }
        }
    }

    let sortedMaterials = [...legendaryMaterials]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1] - a[1]);
    let sortedStash = [...stash]
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [material, quantity] of sortedMaterials) {
        console.log(`${material}: ${quantity}`);
    }
    for (let [material, quantity] of sortedStash) {
        console.log(`${material}: ${quantity}`);
    }
}