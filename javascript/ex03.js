// 함수
// ㄴ 선언식과 표현식

// 1) 선언식
// function 함수명(파라미터){실행문;}
// 모든 함수는 return 존재함 (return 값이 없는 경우 생략 가능)

// 1-1) return X, parameter X
function func1(){
   console.log("1번 함수")
}
// 1-2) return X, parameter O
function func2(name){
    console.log(`2번 함수 : ${name}`);
}
// 1-3) return O, parameter X
function func3(){
    return '3번 함수';
}
// 1-4) return O, parameter O
function func4(name){
    return `name : ${name}`;
}

func1();
func2('이혜량');
console.log(func3());
console.log(`4번 함수 : ${func4('이혜량')}`);

// 표현식
// 2-1 익명함수
// ㄴ 변수를 함수 선언식으로 초기화하는 것
// ㄴ 호이스팅을 회피하기 위한 목적을 가짐
// func5(); // ReferenceError: Cannot access 'func5' before initialization
const func5 = function(){
    console.log('익명함수가 호출되었습니다.');
};
func5();

// 2-2) 화살표함수 : 함수를 축약된 형태로 표현식
// (파라미터) => {실행문;}
const func6 = (name) => {
    console.log(name);
};
func6('이혜량');

// 2-3) 즉시실행함수
// ㄴ 함수 선언과 동시에, 바로 호출
(function(name){
    console.log('hello', name);
})('혜량')