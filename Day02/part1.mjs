import fs from "node:fs";

const input = fs.readFileSync("./input").toString();
const ranges = input.split(",").filter(a => a).map((line) => line.split('-'))
let result = 0;

ranges.forEach(range => {
    for (let i = Number(range[0]); i <= Number(range[1]); i++) {
        const length = i.toString().length;
        if (length % 2 !== 0) continue;
        const id = i.toString();
        const firstPart = id.slice(0, length / 2);
        const secondPart = id.slice(length / 2);

        if (firstPart === secondPart) result += i
    }
})

console.log(result);
