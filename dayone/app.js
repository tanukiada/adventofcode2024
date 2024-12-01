const fs = require('node:fs');

const regex = /\s{1,}/
let text = fs.readFileSync('input.txt').toString();
let textArray = text.split('\n');
let firstArray = [];
let secondArray = [];
let totalArray = [];
let similarityScore = 0;
let totalScore = 0;
let arrayTwo = [];

const arrayMap = textArray.map((x) => {
    return x.split(regex);
});

firstArray = arrayMap.map((x) => Number(x[0]));
secondArray = arrayMap.map((x) => Number(x[1]));
firstArray = firstArray.sort((b, a) => a - b);
secondArray = secondArray.sort((b, a) => a - b);

firstArray.forEach((x) => {
    arrayTwo = secondArray.filter((y) => {
        return y === x;
    });
    totalScore = arrayTwo.length * x;
    similarityScore = similarityScore + totalScore;
    totalScore = 0;
});

for (let i = 0; i < firstArray.length - 1; i++) {
    totalArray.push(Math.abs(firstArray[i] - secondArray[i]));
}


console.log(totalArray.reduce((a, b) => a + b));
console.log(similarityScore);