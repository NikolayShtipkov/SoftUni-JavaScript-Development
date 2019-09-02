function solve(input) {
    let invitedGuests = [];
    let index = input.indexOf('PARTY');
    let invitations = input.slice(0, index);

    for(let guest of invitations) {
        invitedGuests.push(guest);
    }

    for(let i = index + 1; i < input.length; i++) {
        let guest = input[i];
        let deletionIndex = invitedGuests.indexOf(guest);
        invitedGuests.splice(deletionIndex, 1);
    }

    console.log(invitedGuests.length);

    let vip = invitedGuests.filter(x => !isNaN((Number(x.charAt(0)))));
    let regular = invitedGuests.filter(x => isNaN((Number(x.charAt(0)))));

    if (vip.length > 0) {
        console.log(vip.join('\n'));
    }
    if (regular.length > 0) {
        console.log(regular.join('\n'));
    }
}