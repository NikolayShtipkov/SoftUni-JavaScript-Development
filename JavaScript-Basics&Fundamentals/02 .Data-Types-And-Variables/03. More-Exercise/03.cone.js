function solve (radius, height) {
    let surfaceArea = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * (radius ** 2) * height / 3;
    console.log(`volume = ${volume.toFixed(4)}`)
    let area = Math.PI * radius * (radius + surfaceArea);
    console.log(`area = ${area.toFixed(4)}`)
}