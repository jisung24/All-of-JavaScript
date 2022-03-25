'use strict'
//if switch는 어차피 다 아는데 삼항연산자!!! 다시 기억하려고 함! 

// 단 삼항연산자는 그냥 간단할때만 쓰는거야!!! ====> 조건이 여러개고 복잡할 경우에는 if switch를 쓰는게 코드 가독성면에서 훨씬 좋음. 

//19살이상
const age = 20;

if(age > 19){
    console.log('true');
}else{
    console.log('false!');
}


console.log(age > 19 ? '19세 초과입니다!' : '19세보다 같거나 작습니다');

const name = '김지성';

console.log(name !== null ? `${name}님 안녕하세요!` : `이름으로 null값 안 돼!`);

let result = name !== null ? '안녕!' : 'bye!';
console.log(result);


const mathScore = 80;

const myMathClass = mathScore > 80 ? 'A' : 'B'; //80을 넘었다면 a일것이고 아니라면 b다.
console.log(`my mathclass is >> ${myMathClass}`);