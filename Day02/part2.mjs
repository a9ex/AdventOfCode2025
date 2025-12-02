import fs from "node:fs";

const input = fs.readFileSync("./input").toString();
const ranges = input.split(",").filter(a => a).map((line) => line.split('-'))
let result = 0;

ranges.forEach(range => {
    for (let i = Number(range[0]); i <= Number(range[1]); i++) {
        const length = i.toString().length;
        const id = i.toString();
        
        for (let j = 1; j < length; j++) {
            if (new RegExp(String.raw`^(.{${j}})\1*$`).test(id)) {
                result += i;
                break;
            }
        }
    }
})

console.log(result);
