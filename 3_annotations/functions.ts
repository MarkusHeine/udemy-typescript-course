const add = (a: number, b: number ): number => {
    return a + b; 
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number) : number {
    return a * b;
}

const logger = (msg: string): void => {
    console.log(msg);
}

const throwErr = (msg: string): never => {
    throw new Error(msg)
}

const throwErr2 = (msg: string): void => {
    if (msg) {
        throw new Error(msg)
    }
}

const todaysWeather = {
    date: new Date(),
    weather: "sunny"
}

const logWeather = ({ date, weather }: {date: Date, weather: string}): void => {
    console.log(`
        ${date}
        ${weather}
    `)
}
logWeather(todaysWeather)

