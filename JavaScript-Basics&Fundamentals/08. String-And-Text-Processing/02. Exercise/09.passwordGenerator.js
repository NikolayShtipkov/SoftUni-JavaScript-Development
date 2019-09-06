function solve(input) {
    let word = input.pop();
    let string = input.join('').split('');
    let index = 0;

    for (let i in string) {

        if (getVowels(string[i])) {
            string[i] = word[index].toUpperCase();
            index++;

            if(index > word.length - 1) {
                index = 0;
            }
        }
    }
    let password = string.reverse().join('')

    console.log(`Your generated password is ${password}`);

    function getVowels(x) {
        if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
            return true;
        } 
        return false
    }
}