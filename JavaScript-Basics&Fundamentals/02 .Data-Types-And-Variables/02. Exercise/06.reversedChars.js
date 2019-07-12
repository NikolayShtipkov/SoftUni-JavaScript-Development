//lame

function solve (a, b, c){
    console.log(`${c} ${b} ${a}`)
}

//playing around

function reverse (a, b, c) {
    let arr = [a, b, c];
    arr = arr.reverse();
    
    console.log(arr.join(' '))
}

//i play too much..

function looped (a, b, c) {
    let arr = [a, b, c];
    let word = arr.join('');
    let emptyArr = [];

    for(let i = word.length - 1; i >= 0; i--) {
        emptyArr.push(word[i]);
    }

    console.log(emptyArr.join(' '));
}