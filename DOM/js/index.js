'use strict';

/**
 * js한테는 html문서가 그냥 문자열로 보인다.
 * 
 * html,css는 보여주는 역할! ==> js는 html요소를  control하는 역할!
 * html요소를 객체화시켜서 가져와서 control해준다! 
 * 
 * 하지만 정말 문자열로 본다면 js가 할 수 있는 게 없어.
 * 만약 그냥 hellowordwdawjdlkawjdlakwdwajfk라는 문자열로 인식했다면,
 * js는 딱히 할 게 없어!!!!!!!!!
 * ========= << 그래서 js가 제대로 알아먹을 수 있는 형태로 바꿔야했어!! >> ==================
 * 그게 dom이야!!
 * 
 * =================== << 브라우져 작동원리 >> ===================
 * 1. HTML을 가져와서 해석해서 파싱트리를 만든다.
 * 2. 파싱트리를 기반으로 DOM을 만든다! 
 * 
 *  =================== << DOM >> =================== 
 * Document : html문서
 * Object Model : html요소를 객체화 시켜서 tree화 시킨 모델! 
 * 
 */


//근데 이렇게 js가 html을 받으면 너무 .... 음.. 깔끔하지 못 해!
//따라서 html태그를 tree구조로 만들고 하나하나 객체화 시켜서 모델화 시킴.
// 그럼 훨씬 더 쉽게 접근하기 쉬워!! 

//여기서 html문자열을 의미있는 객체로 바꾸는 작업을 parse라고 한다.
// parsing이 여기서 나옴!!!!!

//1. html을 파싱한다(단순 문자열에서 의미있는 객체로 바꾼다.) => 파싱트리 생성

//2. DOM TREE 생성한다! (아주 중요!)

//================= 문법 시작 ===================

//1. HTML에 접근하기! DOCUMENT를 이용하여 접근한다.

//2. html태그 전체에 접근 : document.documentElement

//3. body에 접근 : document.body

//4. head에 접근 : document.head

const elementBody = document.body;
console.log(elementBody);
elementBody.style.backgroundColor = 'black';
elementBody.style.color = "white";
//document.body.style검색하면 style안에 있는 모든 property들이
// 객체형태로 나온다!
// 브라우져가 html파싱하고 dom을 만들면 js가 이제 dom을 보고 html에 접근을 한다.