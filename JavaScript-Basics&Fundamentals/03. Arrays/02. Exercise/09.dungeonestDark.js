function solve(string) {
    let rooms = string[0].split('|');
    let health = 100;
    let coins = 0;
    let clear = true;

    for(let i = 0; i < rooms.length; i++) {
        let [item, number] = rooms[i].split(' ');

        if (item === 'potion') {
            if (health < 100) {
                let maxHealth = health;
                health += +number;

                if (health > 100) {
                    health = 100;
                }

                let heal = health - maxHealth;

                console.log(`You healed for ${heal} hp.`)
            }
            
            console.log(`Current health: ${health} hp.`)
        } else if(item === 'chest') {
            coins += +number;

            console.log(`You found ${number} coins.`);
        } else {
            health -= +number;

            if(health <= 0) {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);

                clear = false;
                break;
            } else {
                console.log(`You slayed ${item}.`)
            }
        }
    }

    if (clear === true) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

solve('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');