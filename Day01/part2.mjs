import fs from "node:fs";

const input = fs.readFileSync("./input").toString();
const lines = input.split("\n").filter(a => a).map((line) => [line.charAt(0), parseInt(line.slice(1))])
let dial = 50;
let result = 0;

const mod = (n, m) => (n % m + m) % m;
const computeTurns = (rotation, op) => Math.abs(Math.floor((dial + ((op === "L") ? (-rotation) : rotation)) / 100))
const substractDial = (rotation) => (dial = mod(dial - rotation, 100))
const addDial = (rotation) => (dial = mod(dial + rotation, 100))


const operations = {
    "L": substractDial,
    "R": addDial
}
lines.forEach(line => {
    result += computeTurns(line[1], line[0])
    operations[line[0]](line[1])
})

console.log(result);
