'use strict';

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim(); //배열로 안 쪼개도 돼!
const surprise = '??!';

console.log(input + surprise);