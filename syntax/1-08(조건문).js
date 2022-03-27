'use strict';

// 조건문 : 어떤 식이나 값의 조건을 따시는 문법!
// if문이 안 들어간 코드는 없어! -----> 무조건 핵심임.
// if(식,값)
// switch(값이들어간 변수, 식)
// 삼항연산자(단일 조건문일때만!!! ==> 너무 길어지면 가독성 떨어짐!)

const age = 19;

const result = age > 19 ? '당신은 성인!' : '아직 미성년자!';
console.log(result);


const mathScore = 70;

const className = (mathScore > 90) ? 'a반' : (mathScore > 80) ? 'b반' : 'c반';
console.log(className);
