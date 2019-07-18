function solve(arr) {
    let distinctArray = arr.filter((el, i) => {
       return arr.indexOf(el) === i;
    });
    console.log(distinctArray.join(' '));
}