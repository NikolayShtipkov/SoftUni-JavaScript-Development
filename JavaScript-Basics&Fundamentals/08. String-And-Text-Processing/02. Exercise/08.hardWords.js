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
solve(['Hi, grandma! I\'m so ____, to write to you. ______, the winter vacation, so _______! things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);