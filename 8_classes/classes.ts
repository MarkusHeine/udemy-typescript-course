class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log("tuut");
    }
}

const vehicle = new Vehicle("orange");

class Car extends Vehicle {
    private drive(): void {
        console.log("meoowwww");
    }

    startDrive(): void {
        this.drive();
    }
}

const car = new Car("green");
console.log(car);
