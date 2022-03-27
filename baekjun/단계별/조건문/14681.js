'use strict';
 // 무조건 readLine을 써야 런타임오류가 나지않는다!!!!!!!!!!!!
const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');
// console.log(input);
const arr = [];

input.forEach((value)=>{
    arr.push(Number(value));
})


if((arr[0] >= 0) &&(arr[1] >= 0)){
    console.log('1');
}
else if((arr[0] >= 0) &&(arr[1] <= 0)){
    console.log('4');
}
else if((arr[0] <= 0) &&(arr[1] >= 0)){
    console.log('2');
}
else{
    console.log('3');
}