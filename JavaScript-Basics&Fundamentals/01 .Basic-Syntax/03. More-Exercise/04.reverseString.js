//functional

function reverse(string) {
    string = string.split('').reverse().join('');
    console.log(string);
}
reverse('yellow');

//primitive

function solve(str) {
    let reversed = '';

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    console.log(reversed);
}
solve('hello');