class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log("tuut");
    }
}

const vehicle = new Vehicle("orange");

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log("meoowwww");
    }

    startDrive(): void {
        this.drive();
    }
}

const car = new Car(65, "green");
console.log(car);
