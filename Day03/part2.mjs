import fs from "node:fs";

const input = fs.readFileSync("./input").toString();
const lines = input.split("\n").filter(a => a).map((line) => line.split(''))
let result = 0;

const DIGITS = 12;

const findHighestNumber = (array) => {
    const number = Math.max(...array)
    const index = array.findIndex((n) => n === number.toString())
    return { number, index }
}

lines.forEach(line => {
    let joltage = ""
    for (let i = DIGITS - 1; i >= 0; i--) {
        const lineCopy = JSON.parse(JSON.stringify(line))
        if (i !== 0) lineCopy.splice(-i)
        const highestNumber = findHighestNumber(lineCopy)
        line = line.slice(highestNumber.index + 1)
        joltage += highestNumber.number
    }
    result += Number(joltage)
})

console.log(result)
