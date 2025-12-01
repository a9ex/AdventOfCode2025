import fs from "node:fs";

const input = fs.readFileSync("./input").toString();
const lines = input.split("\n").filter(a => a).map((line) => [line.charAt(0), parseInt(line.slice(1))])
let dial = 50;
let result = 0;

const mod = (n, m) => (n % m + m) % m;
const substractDial = (rotation) => (dial = mod(dial - rotation, 100))
const addDial = (rotation) => (dial = mod(dial + rotation, 100))


const operations = {
    "L": substractDial,
    "R": addDial
}
lines.forEach(line => {
    operations[line[0]](line[1])
    if (dial === 0) result++
})

console.log(result);
