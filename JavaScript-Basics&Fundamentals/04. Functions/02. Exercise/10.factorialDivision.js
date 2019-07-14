function solve(firstnum, secondnum) {
    let firstFac = getF(firstnum);
    let secondFac = getF(secondnum);

    console.log((firstFac / secondFac).toFixed(2));
    
    function getF(num) {
        if (num === 1) {
            return 1;
        }
        return num * getF(num - 1);
    }
}