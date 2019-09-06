function solve(strings) {
    let letter = strings[0].split(' ');
    let words = strings[1];

    for (let word of words) {

        for (let i in letter) {
            
            if (letter[i].includes('_')) {
                let instance = letter[i];
                let mark = ''

                if(instance[instance.length - 1] !== '_') {
                    mark = instance[instance.length - 1];
                    instance = instance.substring(0, instance.length - 1);
                }

                if (instance.length === word.length) {
                    letter[i] = word + mark;
                }
            }
        }
    }

    console.log(letter.join(' '));
}