function solve(input) {
    let armiesMap = new Map();

    for (let string of input) {

        if (string.includes('arrives')) {
            let leader = string.replace(' arrives', '');
            armiesMap.set(leader, new Map());
        } else if (string.includes(':')) {
            let [ leader, tokens ] = string.split(': ');
            let [ armyName, armyCount ] = tokens.split(', ');

            if (armiesMap.has(leader)) {
                let innerMap = armiesMap.get(leader)
                innerMap.set(armyName, Number(armyCount));
                armiesMap.set(leader, innerMap);
            }
        } else if (string.includes('+')) {
            let [ armyName, armyCount ] = string.split(' + ');
            
            for (let [ leaderName, armyMap ] of armiesMap) {
                if (armyMap.has(armyName)) {
                    let oldValue = armyMap.get(armyName);
                    armyMap.set(armyName, Number(armyCount) + oldValue);
                }
            }
        } else if (string.includes('defeated')) {
            let leader = string.replace(' defeated', '');
            armiesMap.delete(leader);
        }
    }

    let sortedArmies = [...armiesMap].sort((a, b) => sorting(a[1], b[1]));

    for (let [ leader, map ] of sortedArmies) {
        let totalCount = [...map.values()].reduce((a, b) => a + b);
        console.log(`${leader}: ${totalCount}`);

        let sortedMap = [...map].sort((a, b) => b[1] - a[1]);
        
        for (let [ key, value ] of sortedMap) {
            console.log(`>>> ${key} - ${value}`);
        }
    }

    function sorting(a, b) {
        let aValue = [...a.values()].reduce((a, b) => a + b);
        let bValue = [...b.values()].reduce((a, b) => a + b);

        return bValue - aValue;
    }
}