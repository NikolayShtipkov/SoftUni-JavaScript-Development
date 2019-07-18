function solve (count, helmetP, swordP, shieldP, armorP) {
    let expences = 0;

    if (count >= 2) {
        let sum = Math.trunc(count / 2) * helmetP;
        expences += sum;
    }

    if (count >= 3) {
        let sum = Math.trunc(count / 3) * swordP;
        expences += sum;
    }

    if (count >= 6) {
        let sum = Math.trunc(count / 6) * shieldP;
        expences += sum;
    }

    if (count >= 12) {
        let sum = Math.trunc(count / 12) * armorP;
        expences += sum;
    }

    console.log(`Gladiator expenses: ${expences.toFixed(2)} aureus`);
}