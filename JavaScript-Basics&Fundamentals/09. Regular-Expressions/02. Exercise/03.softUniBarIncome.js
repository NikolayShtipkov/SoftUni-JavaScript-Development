class MonsterCard {
    constructor(name, stars) {
        this.name = name;
        this.stars = stars;

        this.effect = () => {
            console.log('hasEffect and its dumb');
        }
    }

    get stats() {
        return `Summon: ${this.name}, with: ${this.stars} stars`;
    }
}

let BlueEyes = new MonsterCard('BlueEyes', 8);

console.log(BlueEyes.effect);





