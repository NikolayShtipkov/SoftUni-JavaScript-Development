//JSON and objects:

function solve(input) {
    let jsonTowns = [];

    for(let inputRow of input) {
        let [ town, lat, long ] = inputRow
            .split('|')
            .filter(Boolean)
            .map(el => el.trim());

        lat = +Number(lat).toFixed(2);
        long = +Number(long).toFixed(2);

        jsonTowns.push(JSON. stringify({
            Town: town,
            Latitude: lat,
            Longitude: long
        }));
    }

    console.log(jsonTowns.join('\n'));
} 

//Points:
function solve(input) {
    let jsonTowns = [];

    for(let inputRow of input) {
        let [ town, lat, long ] = inputRow
            .split('|')
            .filter(Boolean)
            .map(el => el.trim());

        lat = +Number(lat).toFixed(2);
        long = +Number(long).toFixed(2);

        jsonTowns.push(`{ town: '${town}', latitude: '${lat}', longitude: '${long}' }`);
    }

    console.log(jsonTowns.join('\n'));
}