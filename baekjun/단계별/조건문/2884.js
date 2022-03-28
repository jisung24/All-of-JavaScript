'use strict';
//45분 더 빨리 알람 맞추기!

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split(' ');
const arr = [];

input.forEach((value)=>{
    arr.push(Number(value));
})

let hour = arr[0];
let min = arr[arr.length - 1];

if(min >= 45){
    min = min - 45;
    console.log(hour + " " + min);
}else{
    min = (min + 15);
    if(hour !== 0){
        hour = hour - 1;
    }else{
        hour = 23;
    }
    console.log(hour + " " + min);
}