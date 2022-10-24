// 배열

// 선언 및 초기화
const arr = []; // = new Array();

// 1. 추가
// push()
arr.push('apple');
arr.push(123);

// * 자바스크립트의 배열은 모든 자료형을 담을 수 있음
console.log(arr);

// 전체 값 출력
for(let i = 0;i < arr.length; i++){
    console.log(arr[i]);
}

// forEach() 하무활용
// ㄴ 인자값으로 즉시 실행 함수를 정의해주면 됨
// ㄴ forEach()는 순환이 끝날 때까지 중단할 수 없음!!!
arr.forEach(function(data){
    console.log(data);
});

// 2. 삭제
// 1) pop() <<< stack처럼
// 2) shift() <<< queue처럼
// 3) splice() <<< 부분 잘라내기
// ㄴ splice(index) 지정한 인덱스 이후로 모두 잘라냄
// ㄴ splice(index, count) 지정한 인덱스부터 count만큼 잘라냄
arr = arr.slice(0, 1);
console.log(arr);