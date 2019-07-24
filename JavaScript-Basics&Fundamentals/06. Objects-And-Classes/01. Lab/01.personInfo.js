function solve(firstName, lastName, age) {
    let id = {
        firstName,
        lastName,
        age
    };

    let entries = Object.entries(id);

    for(let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}