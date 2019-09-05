function solve(word, text) {
    let searched = word.toLowerCase();
    text = text.toLowerCase();
    let arr = text.split(' ');
    let hasWord = false;

    for (let instance of arr) {
        if (instance === searched) {
            console.log(word);
            hasWord = true;
            break;
        }
    }

    if (!hasWord) {
        console.log(`${word} not found!`);
    }
}