//Object:

function employees(employeeArr) {
    let result = [];
    let person = {};

    for (let employee of employeeArr) {
        let personalNumber = employee.length;

        person = {
            name: employee,
            number: personalNumber
        }

        result.push(person);
    }

    result.forEach((i) => console.log(`Name: ${i.name} -- Personal Number: ${i.number}`));
}

//Class:

function personClass(employeeArr) {
    let result = [];

    class Person {
        constructor(name, number) {
            this.name = name;
            this.number = number;
        }
    }

    for (let employee of employeeArr) {
        let personalNumber = employee.length;

        let newPerson = new Person(employee, personalNumber);

        result.push(newPerson);
    }

    result.forEach((i) => console.log(`Name: ${i.name} -- Personal Number: ${i.number}`));
}

//Primitive:

function solve(employeeArr) {
    for(let employee of employeeArr) {
        let personalNumber = employee.length;

        console.log(`Name: ${i.name} -- Personal Number: ${i.number}`);
    }
}