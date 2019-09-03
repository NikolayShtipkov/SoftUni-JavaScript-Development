function solveGarage(inputArr) {
    let garagesMap = new Map()
 
    for (let row of inputArr) {
        let rowArr = row.split(' - ')
        let garage = rowArr[0]
        let carKeyValues = rowArr[1]
        let availableCars = []
 
        if (!garagesMap.has(garage)) {
            availableCars.push(carKeyValues)
            garagesMap.set(garage, availableCars)
 
        } else {
            availableCars = garagesMap.get(garage)
            availableCars.push(carKeyValues)
            garagesMap.set(garage, availableCars)
        }
    }
 
    let sortedGarages = [...garagesMap.entries()];
    let output = ''

    for (let [currGarage, currCarKeyValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`
 
        for (let currCarProperties of currCarKeyValue) {
 
            for (let everySymbol of currCarProperties) {
                currCarProperties = currCarProperties.replace(': ', ' - ')
            }
 
            output += `--- ${currCarProperties}\n`
        }
    }
    
    console.log(output);
}