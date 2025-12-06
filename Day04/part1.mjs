import fs from "node:fs";

const input = fs.readFileSync("./input").toString();
const lines = input.split("\n").filter(a => a).map((line) => line.split(''))
let result = 0;

const ROLL = "@"

const TO_CHECK_MATRIX = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
]

const countAdjacentRolls = (x, y) => {
    let adjacent = 0;
    if (lines[y][x] !== ROLL) return;
    TO_CHECK_MATRIX.forEach(coords => {
        if (lines[y + coords[0]]?.[x + coords[1]] === ROLL) adjacent++;
    })
    return adjacent;
}

for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (countAdjacentRolls(i, j) < 4) result++;
    }
}

console.log(result)
