//Cheesy way:
function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(' ');
        console.log(`${name}, age ${age} says Meow`);
    }
}

//Proper way:

function cyat(arrOfCatData) {
    let cats = [];

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for ( let i = 0; i < arrOfCatData.length; i++) {
        let [name, age] = arrOfCatData[i].split(' ');

        cats.push(new Cat(name, age));
    }

    for (let kitten of cats) {
        console.log(kitten.meow());
    }
}