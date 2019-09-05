function solve(words, sentance) {
    words = words.split(', ');

    for (let word of words) {
        let replacement = '*'.repeat(word.length);

        if (sentance.includes(replacement)) {
            sentance = sentance.replace(replacement, word);
        }
    }

    console.log(sentance);
}