function sort(words) {

    console.log(words.sort(sortProducts).join('\n'));
    
    function sortProducts(a, b) {

        let alength = a.length;
        let blength = b.length;
        let result = alength - blength;

        if (result === 0) {
            return a.localeCompare(b);
        }

        return result;
    }
}