function smallestOfThree() {
    let a = arguments['0'];
    let b = arguments['1'];
    let c = arguments['2'];
    
    return Math.min(a, Math.min(b, c));
}