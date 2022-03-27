'use strict';
//a-b를 구하세요!
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' '); //문자열 type임!
const arr = []; //빈 배열을 만들고 값을 넣어서 새롭게 만들어주려는... 계획...
for(let value of input){
    arr.push(Number(value));
}
console.log(arr[0] - arr[arr.length - 1]);