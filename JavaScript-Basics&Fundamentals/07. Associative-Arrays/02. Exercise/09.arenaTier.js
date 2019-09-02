function solve(input) {
    input.pop();
    
    let gladiators = new Map();
    let counter = 0;

    for (let index in input) {
        let [ gladiator, technique, skill ] = input[index].split(' -> ');

        if (technique === undefined) {
            counter = index;
            break;
        }

        if (!gladiators.has(gladiator)) {
            let arsenal = new Map();

            arsenal.set(technique, skill);
            gladiators.set(gladiator, arsenal);
        } else {
            let oldArsenal = gladiators.get(gladiator);
            oldArsenal.set(technique, skill);
        }
    }
    let fights = input.slice(counter);

    for (let combatants of fights) {
        let [ first, second ] = combatants.split(' vs ');

        if (gladiators.has(first) && gladiators.has(second)) {
            fightOff(first, second);
        }
    }

    let sorted = [...gladiators].sort((a, b) => sorting(a, b));

    for (let [ gladiator, arsenal ] of sorted) {
        let totalSkill = [...arsenal.values()].reduce((acc, curr) => +acc + +curr);
        console.log(`${gladiator}: ${totalSkill} skill`);

        let sortedArsenal = [...arsenal]
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => +b[1] - +a[1]);

        for ( let [ technique, skill ] of sortedArsenal) {
            console.log(`- ${technique} <!> ${skill}`);
        }
    }

    function fightOff(first, second) {
        let firstMap = gladiators.get(first);
        let secondMap = gladiators.get(second);

        let firstKeys = [...firstMap.keys()];
        let secondKeys = [...secondMap.keys()];

        for (let i = 0; i < firstKeys.length; i++) {
            for (let j = 0; j < secondKeys.length; j++) {
                if (firstKeys[i] === secondKeys[j]) {
                    let firstPoints = [...firstMap.values()]
                        .map(Number)
                        .reduce((acc, curr) => acc + curr);
                    let secondPoints = [...secondMap.values()]
                        .map(Number)
                        .reduce((acc, curr) => acc + curr);

                    if (firstPoints > secondPoints) {
                        return gladiators.delete(second);
                    } else if (secondPoints > firstPoints) {
                        return gladiators.delete(first);
                    }
                }
            }
        }

        return;
    }

    function sorting(a, b) {
        let aValue = [...a[1].values()].reduce((acc, curr) => +acc + +curr);
        let bValue = [...b[1].values()].reduce((acc, curr) => +acc + +curr);

        return bValue - aValue;
    }
}