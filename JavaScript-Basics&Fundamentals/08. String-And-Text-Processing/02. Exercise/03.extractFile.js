function solve(path) {
    let start = path.lastIndexOf('\\');
    let end = path.lastIndexOf('.');

    let name = path.substring(start + 1, end);
    let extension = path.substring(end + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}