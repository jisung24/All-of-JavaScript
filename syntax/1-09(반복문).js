'use strict';

//for(조건) ==> 조건이 만족되는만큼 정해진 횟수만큼 반복시켜준다!!

for(let i=0; i<5; i++){
    console.log(i); //조건이 맞을떄까지 블록안에 있는 코드 반복한다.!
}
// 중간에 break로 빠져나올 수 있고, continue로 지나칠 수 있어!

//배열!
let numbers = [43,55,66,78,99];
//이렇게 눈으로 보니까 5개지....
//서버에서 값을 받아왔을때 과연 내가 값이 몇 개인지 알 수 있을까...?
//너무 data가 많다보니까 절대로 배열의 값이 몇 개 인지 알 수 없어!

// 1. length : 배열의 길이(-1하면 마지막 index!)

//배열 다루기 
// 1. for문!
for(let i=0; i<numbers.length; i++){
    console.log(`배열 값 >> ${numbers[i]}`);
}

//2. for - in(배열 obj 둘 다 사용할 수 있다.)
// 배열의 index를 가져온다!
// numbers[value] 하면 가져온다!
for(let idx in numbers){ //index번호를 찾을 수 있음!
    //배열의 값을 통해서 index를 찾을 수 있음! ==> 그 값이 몇 번째인지 알 수
    if(idx === numbers.length){
        console.log(`78은 index ${idx}번에 있습니다!`);
        console.log(`${idx + 1}번째 숫자네요!`);
    }else{
        continue;
    }
}

let item = {
    title : '필통',
    content : '필통입니다',
    price : 3000,
    tell : 'no!',
    color : 'blue',
    user : '김지성',
    // 등등 상품 property가 막 40개 50개 있어!!!!!!!!!!!!!
    //그럼 하나하나 모든 프로퍼티를 다 가져와서 쓸 순 없어!
}
// 원하는 속성값에 해당되는 값을 찾고싶을 때!! 
// 모든 속성을 전부 출력해줘서 관련해서 값을 찾을 수 잇다. 
for(let key in item){
    console.log()
    console.log(`키 >> ${key}`); //key전부 보기!
    console.log(`값 >> ${item[key]}`); //value!
    console.log('');
}

//3. for - each(무조건 배열 안에서만 사용가능하다.)
//forEach() ==> 괄호 안에는 callback함수를 넣어서 쓸 수 있다. 
let arr = [66,78,50,104,345];
let minValue = arr[0]
arr.forEach((value,index)=>{ //각 값, 각 index!
    //call-back함수가 실행된다! ==> forEach가 호출되면 callback함수가 뒤이어 실행!
    //즉 배열안의 값 마다 callback함수가 실행된다!
    //파라미터 3개 value index (전체 array ==> 보통 안 씀! )
    if(value < arr[0]){
        minValue = value;
    }
})
console.log(`최솟값 >> ${minValue}`);


//for - of ==> 아까는 index 이번엔 value
// index연관해서 배열을 찾고싶으면 for in을 써라!!
for(let value of arr){
    //value만 출력하는 거!!!!
}



let arr2 = [3,6,9,12];
//다 돌고 9가 몇 번째 숫자인지 찾아라!
//for in과 forEach로 찾을 수 있음! 
for(let idx in arr2){
    if(arr2[idx] === 9){
        console.log(`9는 ${Number(idx) + 1}번쨰 숫자입니다!`);
    }
}

arr2.forEach((value,index)=>{
    if(arr2[index] === 9){
        console.log(index);
    }
})

let arr3 = [20,10,35,30,7];
let min = arr3[0];
let max = arr3[0];
for(let value of arr3){
    if(value < min){
        min = value;
    }
    if(value > max){
        max = value;
    }
}
console.log(min,max);


//for in, for of, forEach 복습
let num = [777,431,788,1011,999,929,101,425,623,727,943,1000];

class Item{ //Item게시판 만들었다고 치자! 
    constructor(title,content,price,tell){
        this.title = title;
        this.content = content;
        this.price = price;
        this.tell = tell;
    }
}
let item1 = new Item('필통','필통입니다',3000,'x');
// 프론트에서 객체를 쓸 일이 있나?
// js는 브라우져상 모든 요소들을 객체로 만들어서 다룬다.
// html요소를 하나 가져오면 그것도 객체로 다룬다.
// 따라서 객체는 진짜 중요함. 
for(let key in item1){
    console.log(`키 : ${key}, 값 : ${item1[key]}`);
}


num.forEach((value,index)=>{ //값과 index를 동시에 다루고싶으면 forEach, for-in
    //forEach함수는 각각의 value와 index에 대햐여 콜백함수를 실행해준다!
    if(value > 300){
        console.log(`값 >> ${value}`);
        console.log(`index >> ${index}`);
        console.log('=================');
    }else{
        console.log('300 안 넘어!');
    }
})

for(let idx in num){
    if(num[idx] === 999){
        console.log(`${Number(idx) + 1}번째에 999들어있음~`);
    }else{
        continue;
    }
}