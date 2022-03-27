'use strict'; //두 수 비교하기!

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');
const arr = [];

for(let value of input){
    arr.push(Number(value));
}

// if(arr[0] > arr[1]){
//     console.log('>');
// }else if(arr[0] === arr[1]){
//     console.log('==');
// }else{
//     console.log('<');
// }

const result = (arr[0] > arr[1]) ? '>' : (arr[0] < arr[1]) ? '<' : '==';
console.log(result);