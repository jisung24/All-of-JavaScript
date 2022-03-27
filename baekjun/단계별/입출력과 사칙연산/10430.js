'use strict';

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(" ");
const arr = [];

for(let value of input){
    arr.push(Number(value));
}
//arr로 계산한다!
let a = arr[0];
let b = arr[1];
let c = arr[2];

console.log((a+b)%c);
console.log(((a % c) + (b % c)) % c);
console.log((a*b)%c);
console.log(((a % c) * (b % c)) % c);