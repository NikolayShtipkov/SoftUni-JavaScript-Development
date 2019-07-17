function solve(group, album, song){
    let time =(group.length * album.length) * song.length / 2;
    let rotations = Math.ceil(time / 2.5);
    
    console.log(`The plate was rotated ${rotations} times.`);
}