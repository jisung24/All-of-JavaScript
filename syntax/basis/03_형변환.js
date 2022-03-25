'use strict';

/**
 * ============= << 형변환 >> =============
 * 1. 암시적(자동) 형변환 
 * ==> 자바스크립트 엔진이 자동으로 type을 변환해주는 게 있어!!!
 * ==> /연산을 사용할 땐 양쪽에 어떤 type이 오더라도 Number type으로 바꿔서 연산을 해준다. 
 * 
 * 2. 명시적 형변환
 * ==> 내가 직접 형변환 해주는 것.  
 * 
 *  - String() ==> 문자형으로 변환
 *  - Number() ==> 숫자형으로 변환 ==> 
 *       - true와 false를 Number로 형변환시키면 1,0이 된다. 
 *       - Number(null)은 0이고, Number(undefined)는 NaN이 된다!
 *  - Boolean() ==> 불린형으로 변환
 *    ==> 어떤 값들이 false가 되는지만 기억하고 나머진 전부 true로 바뀜.!!
 *    => 숫자0
 *    => 빈문자열 ""
 *    => null
 *    => undefined
 *    => NaN
 *    ==============> 이 값들 말고 나머지 값들은 전부 true를 반환한다. 
 */

console.log("9080"/80); //어라? 문자열 나누기 정수를 했는데 왜 저렇게 나옴?
console.log(String(1)/"0"); //infinity ==> nan나와야하는거 아니야??
// /몫 나누기는 data들이 Number type으로 자동으로 변환돼서 연산이 된다. 


console.log(Number(true)); //true는 1이 됨.
console.log(Number(false)); //false는 2가 됨. 


console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean("")); //근데 if문 안에서 자동으로 Boolean으로 바뀜!

if(""){
    console.log('이거 안 나와!');
}else{
    console.log('\"\"은 boolean으로 type변환하면 false라서 이게 출력됨.');
}