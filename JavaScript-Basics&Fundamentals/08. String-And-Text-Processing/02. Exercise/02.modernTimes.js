function solve(string) {
    let arr = string.split(' ');
    let output = [];

    for (let word of arr) {
        if(word.startsWith('#') && word.length > 1) {
            word = word.replace('#', '').trim();
            let isWord = true;

            for (let letter of word) {
                if (!isNaN(letter)) {
                    isWord = false;
                }
            }
            
            if (isWord === true) {
                output.push(word);
            }
        }
    }

    console.log(output.join('\n'));
}