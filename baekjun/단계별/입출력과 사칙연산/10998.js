'use strict';
//두 정수 a,b를 입력받은 다음 곱하는 프로그램을 만드시오.

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');
//복습! split은 배열을 만들어주는 함수! split을 쓴 변수는 배열이 담긴다!
const arr = [];

input.forEach((value)=>{
    arr.push(value); //넣어줄배열.push(값)
})
console.log(arr[0] * arr[arr.length-1]);