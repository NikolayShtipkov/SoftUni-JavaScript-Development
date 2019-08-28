function solve(text) {
    let occurrences = new Map();

    for (let word of text) {
        if (occurrences.has(word)) {
            let newValue = occurrences.get(word) + 1;

            occurrences.set(word, newValue);
        } else {
            occurrences.set(word, 1);
        }
    }
    let sorted = [...occurrences].sort((a, b) => b[1] - a[1]);

    for (let [ string, number ] of sorted) {
        console.log(`${string} -> ${number} times`);
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])