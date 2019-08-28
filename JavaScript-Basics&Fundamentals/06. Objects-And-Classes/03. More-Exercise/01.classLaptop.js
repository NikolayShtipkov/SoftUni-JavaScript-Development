function solve() {

    class Laptop {
        constructor(producer, age, brand, quality) {
            this.producer = producer;
            this.age = age;
            this.brand = brand;
            this.isOn = false;
            this.quality = quality;
        }

        turnOn() {
            this.isOn = true;
            this.quality -= 1;
        }

        turnOff() {
            this.isOn = false;
            this.quality -= 1;
        }

        showInfo() {
            return console.log(JSON.stringify({producer: this.producer, age: this.age, brand: this.brand}));
        }
    }
}