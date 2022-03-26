'use strict';

//절차적 언어라면 함수가 매우 중요하다.
// js는 oop아니야? ==> 자바처럼 pure한 oop아님.. 가짜 oop!!
// 따라서 js도 절차적언어라고 봐도 돼! 

/**
 * Function(함수)
 * - sub-programming이라고도 불림(전체 기능안에서도 세부 기능이 있다는 전제!)
 * - input이 있고 output이 있다! ==> 어떤 일을 하는 코드이다!(node.js api를 작성하다보면 알게 됨!)
 * - 여러 번 재사용이 가능하다. 
 * - 파라미터를 쓰지 않으면 안의 내용을 유연하게 해줄 수 없음. ---> 더 다양한 기능들을 유연하게 
 *   사용할 수 있게 만들어준다. 
 * - 1만 출력을 하게 하는 함수.. number파라미터로 받으면 모든 수를 다 출력하는 함수가 된다.
 * 
 */
// ================================= << PARAMETERS >> =================================
// -1) Primitive type : 메모리상의 값 자체가 들어감.
// -2) Object type : 파라미터로 넣어준 obj의 레퍼런스가 들어간다! 


// 1. 파라미터로 원시값(홀짝 판별함수!)
function odd(number){// 원시타입은 그냥 값 자체가 들어감! 
    if(number % 2 == 1){
        console.log(`${number} is odd!`);
    }else{
        console.log(`${number} is even!`);
    }
}
odd(3);

// 2. 파라미터로 객체가 들어감.(레퍼런스가 들어간다.)
function changeName(obj){ 
    obj.name = '김지성'; //어떤 객체의 name을 무조건 김지성으로 바꿔주는 함수! 
} //
let you = {
    name : '지성',
}
changeName(you); //you를 가리키는 레퍼런스가 들어가서 you.name의 값을 바꾼다! 
console.log(you.name);

// 3. Default parameters (added in ES6) ==> 최신문법!!!!!!!!
// ==> 파라미터를 만들어줬는데 비어있을 땐 원하는 default값을 설정해줄 수 있다!
// ==> 학번이 비어있으면 17학번이라고 그냥 넣어줘! 라는 ...
// ==> 시험을 보지 않았을 경우 f!!
function showMessage(message,from = '김지성'){ //파라미터의 default 값!!
    console.log(`${message} by ${from}`);
}
showMessage('안녕!'); //from의 파라미터 공간은 비어있어==> undefined가 뜸! 

// 4. Rest parameters (added in ES6)
// - 인자를 배열형태로 전달된다.!
// - 몇 개를 전달할지 모를 떄 동적으로!!! ==> 3개든 4개든 다 배열로 만들어준다!!
function printAll(...args){ 
    //for of를 이용해서 배열 출력하기!!!
    for(const arg of args){
        console.log(arg);
    }
}
printAll(1,2,3,4,5)



let arr = [99,100,101,102,103];
function printArr(arr){
    for(let value of arr){ //배열을 다룰땐 무조건 for 값 of 배열이름 을 사용하자!!!
        value = value + 1; //나중엔 for each도 쓰임! 
        console.log(value);
    }
    
}
printArr(arr);

// 5. local scope
// - 정의된 변수를 자식은 확인할 수 있다. , 하지만 부모는 자식에게서 정의된 변수를 확인할 수 없다.
// 자식은 볼 수 있고, 부모는 없다! (선언된 변수를!)

let global = 'hello';
function hello(){
    let message_ = 'hello';
    console.log(message_);
    console.log(global); //지역에 없다면 밖에서 찾게된다! 
}
hello();

{
    let num = 5; //정의는 부모에서해야 자식이 접근이 가능해! 
    //정의를 자식에서 해버리면 부모에서 접근이 불가능하다. 
    {
        console.log(num); //대신 부모에서 선언된 지역변수를 자식은 사용할 수 있다. 
        const go = 4;
    }
    // console.log(go); //자식에게서 선언된 지역변수는 부모는 쓸 수 없다. 
}

// 6. return value
console.log(sum(77,77))
function sum(num1,num2){ //호이스팅 가능. 
    return num1 + num2; //함수 안에서는 var을 써도 지역이긴한데, 그래도 let을 써!!
}
console.log(`합 >> ${sum(5,6)}`);

// ============================= << 2. 함수 표현식 >> =============================

//1. anonymous function : 이름이 없는 함수! 

const jisung = ()=>{ //대입함수는 호이스팅이 되지 않는다!! 
    console.log('김지성!');
}
jisung();

//2. call back(함수 순차적으로 실행! a함수 끝나자마자 바로 b함수 실행하고 싶을 때)
// call back함수는 함수 파라미터 안에 들어있는 함수.
// 메인 함수가 실행되자마자 바로 call back함수가 순차적으로 실행된다!
// 여러개의 call back함수가 오고 상황에따라서 어떤 call back함수가 호출되는 그런 경우도 있어! 

function randomQuiz(answer,printYes,printNo){
    if(answer === '지성'){ //답이 맞으면 바로 printYes호출
        printYes();
    }else{
        printNo(); //답이 아니면 바로 printNo함수 호출!
    }
}

function printYes(){
    console.log('정답입니다!');
}
function printNo(){
    console.log('한 번 더 생각해보세요~~!');
}
randomQuiz('지성',printYes, printNo); 

//입력받은 연산자에 따라서 (+ - / * %) a,b를 연산!
//command를 배열로 
function calculate(a,b,add){
    console.log(add(a,b));
}

function add(a,b){
    return a + b;
}
calculate(4,5,add(4,5));