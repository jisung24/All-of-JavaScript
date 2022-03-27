'use strict';

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString();
const boolggi = Number(input);
const seoggi = boolggi - 543;

console.log(seoggi);