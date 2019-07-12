function solve(firstWord, char, secondWord){
    let fixedWord = firstWord.replace('_', char);
    if(fixedWord === secondWord){
        console.log('Matched');
    } else{
        console.log('Not Matched')
    }
}