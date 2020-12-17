function solve(input) {
    let racers = input[0].split(', ');
    let raceInfo = {};

    for(let data of input.slice(1)) {
        let nameMatch = data.match(/[A-Za-z]/g);
        let name = nameMatch.join('');

        if(nameMatch && racers.includes(name)) {
            let distanceMatch = data.match(/[\d]/g);
            let distance = calculateDistance(distanceMatch);

            if (!raceInfo[name]) {
                raceInfo[name] = 0;
            }

            raceInfo[name] += distance;
        }
    }

    let topThreeRacers = Object.keys(raceInfo)
        .sort((racerOne, racerTwo) => raceInfo[racerTwo] - raceInfo[racerOne])
        .slice(0, 3);

    for(let racer in topThreeRacers) {
        switch(racer) {
            case '0': console.log(`1st place: ${topThreeRacers[racer]}`); break;
            case '1': console.log(`2nd place: ${topThreeRacers[racer]}`); break;
            case '2': console.log(`3rd place: ${topThreeRacers[racer]}`); break;
        }
    }

    function calculateDistance(arr) {
        let totalDistance = 0;
        if (arr === null) {return totalDistance}

        arr.concat([]).forEach((digit) => totalDistance += Number(digit));

        return totalDistance;
    }
}