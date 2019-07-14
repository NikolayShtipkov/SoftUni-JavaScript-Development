function solve(a, b) {
    let firstCode = a.charCodeAt(0);
    let secondCode = b.charCodeAt(0);
    let start = Math.min(firstCode, secondCode);
    let end = Math.max(firstCode, secondCode);

    let chars = [];

    for(let i = start + 1; i < end; i++) {
        chars.push(String.fromCharCode(i));
    }

    return chars.join(' ');
}