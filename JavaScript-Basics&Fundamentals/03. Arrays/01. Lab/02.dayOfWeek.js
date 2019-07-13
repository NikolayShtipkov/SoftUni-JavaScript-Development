function solve(day) {
    let days = ['Invalid day!',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'];

    if (day >= 1 && day <= 7) {
        console.log(days[day]);
    } else {
        console.log(days[0]);
    }
}