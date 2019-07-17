function solve(x1, y1, x2, y2) {
    let pointA = x1 - x2;
    let pointB = y1 - y2;

    let distance = Math.sqrt( pointA*pointA + pointB*pointB);

    console.log(distance);
}