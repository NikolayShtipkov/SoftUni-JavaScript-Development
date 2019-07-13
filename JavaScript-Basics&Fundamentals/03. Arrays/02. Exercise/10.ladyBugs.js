function solve(arr) {
    let size = arr[0];
    let ladybugsPositions = arr[1].split(' ').map(Number);
    let ladybugsArr = [];

    for(let i = 0; i < size; i++) {
        ladybugsArr.push(0);
    }

    for(let i = 0; i < size; i++) {
        let ladybugsIndex = ladybugsPositions[i];
        if (ladybugsIndex >= 0 && ladybugsIndex < size) {
            ladybugsArr[ladybugsIndex] = 1;
        }
    }

    for(let i = 2; i < arr.length; i++) {
        let [ladybugPosition, command, jumpLength]
            = arr[i].split(' ');

        let ladybugIndex = +ladybugPosition;
        jumpLength = +jumpLength;

        if (ladybugsArr[ladybugIndex] !== 1 || ladybugIndex < 0 || ladybugIndex >= ladybugsArr.length) {
            continue;
        }

        if (jumpLength < 0) {
            jumpLength = Math.abs(jumpLength);
            command = command === 'right' ? 'left' : 'right';
        }

        ladybugsArr[ladybugIndex] = 0;

        if (command === 'right') {
            let newPosition = ladybugIndex + jumpLength;
            if (ladybugsArr[newPosition] === 1) {
                newPosition = newPosition + jumpLength;
            }
            if (newPosition < ladybugsArr.length) {
                ladybugsArr[newPosition] = 1;
            }

        } else {
            let newPosition = ladybugIndex - jumpLength;
            if (ladybugsArr[newPosition] === 1) {
                newPosition = newPosition - jumpLength;
            }
            if (newPosition >= 0) {
                ladybugsArr[newPosition] = 1;
            }
        }
    }
    console.log(ladybugsArr.join(' '));
}