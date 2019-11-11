const carMakers: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [
    ["f10"],
    ["corolla"],
    ["a43"],
    [
        [1, 4]
    ]
]

// help with inference when extraction values
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(2)

// help with map
carMakers.map((car: string) => {
    return car.toUpperCase();
})

// felxible types
const importandDates: (Date | string)[] = [new Date()];
importandDates.push("2010-10-10"),
importandDates.push(new Date());

console.log(importandDates);