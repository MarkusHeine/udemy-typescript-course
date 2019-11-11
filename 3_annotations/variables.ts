let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date(); 

// arrays
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1,2,3,4];
let truths: boolean[] = [true, true, false]

// classes
class Car {

}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}
// when to use annotaions

// 1. Function that return the 'any' type
const json = `{
    "x": 10,
    "y": 20
    }`;

const coordinates: { x: number; y:number } = JSON.parse(json);

// 1. When we declare a var on one line and init it later
let words = ["red", "green", "blue"]
let foundWords: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === "green" ) {
        foundWords = true;
    }
}

// 3. Var whpse type can not be inferred correctly
let numnbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}

