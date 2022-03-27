'use strict';

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');
const arr = [];

for(let value of input){
    arr.push(Number(value));
}