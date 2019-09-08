function solve(input) {
    input.pop();
    let keys = input.shift().split(' ');

    for (let msg of input) {
        let counter = 0;
        let arr = msg.split('');

        for (let i in arr) {
            let ascii = arr[i].charCodeAt(0) - keys[counter];
            arr[i] = String.fromCharCode(ascii);

            counter++;
            if (counter > keys.length - 1) {
                counter = 0;
            }
        }
        let string = arr.join('');
        let startAmp = string.indexOf('&');
        let endAmp = string.lastIndexOf('&');
        let startBeak = string.indexOf('<');
        let endBeak = string.lastIndexOf('>');
        let tresure = string.substring(startAmp + 1, endAmp);
        let cooardinates = string.substring(startBeak + 1, endBeak);

        console.log(`Found ${tresure} at ${cooardinates}`);
    }
}
solve([ '1 2 1 3',
'ikegfp\'jpne)bv=41P83X@',
'ujfufKt)Tkmyft\'duEprsfjqbvfv=53V55XA',
'find' ])