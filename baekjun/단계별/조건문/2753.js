'use strict'; //윤년!  아니면x

const fs = require('fs');
const year = Number(fs.readFileSync('test.txt').toString());

const result = ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ) ? '1' : '0';
console.log(result);