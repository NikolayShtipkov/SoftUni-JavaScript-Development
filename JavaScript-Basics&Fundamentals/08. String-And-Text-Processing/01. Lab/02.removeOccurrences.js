function solve(word, text) {
    while (text.includes(word)) {
        text = text.replace(word, '');
    }

    console.log(text);
}
// another level right here..