'use strict';
//a와 b를 입력받은 다음 a+b를 출력하는 프로그램을 작성해라!

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');
//split는 띄어쓰기를 기준으로 배열로 만들어주는 함수이다! ==> split이 들어가면 문자열을 배열로!
let sum = 0;
// for(let value of input){
//     sum += (Number(value));
// }

input.forEach((value)=>{
    //index는 여기서 필요없음!
    sum += Number(value);
})
console.log(sum);

 // /dev/stdin

