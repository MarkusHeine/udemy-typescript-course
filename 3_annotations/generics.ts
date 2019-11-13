// class ArrayOfNumbers {
//   constructor(public collection: number[]) {}

//   get(index: number): number {
//     return this.collection[index];
//   }
// }

// class ArrayOfStrings {
//   constructor(public collection: string[]) {}

//   get(index: number): string {
//     return this.collection[index];
//   }
// }

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const array = new ArrayOfAnything(["a", "b", "c"]);
console.log(array.get(2));

const array2 = new ArrayOfAnything<number>([1, 4, 3, 2]);
console.log(array2.get(2));

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

// generic constraints

class Car {
  print() {
    console.log("I am car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface Printable {
  print(): void;
}

function printHousesorCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}
