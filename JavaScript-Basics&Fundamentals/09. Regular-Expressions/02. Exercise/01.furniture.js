function solve(input) {

    let boughtFurnitures = [];
    let totalMoneySpend = 0;


    for(let data of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]+)!(?<quantity>[\d]+)/gm.exec(data);
        
        if(pattern) {
            boughtFurnitures.push(pattern.groups.name);
            totalMoneySpend += Number(pattern.groups.price) * Number(pattern.groups.quantity);
        }
    }

    console.log('Bought furniture:');

    if(boughtFurnitures.length > 0) {
        console.log(boughtFurnitures.join('\n'));
    }

    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}