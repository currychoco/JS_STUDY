// 배열

// 선언 및 초기화
let arr = []; // = new Array();

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


arr.push(1);
arr.push(2);
arr.push(3);
console.log(arr);
// 2. 삭제
// 1) pop() <<< stack처럼
arr.pop();
console.log(arr);

// 2) shift() <<< queue처럼
arr.shift();
console.log(arr);

// 3) splice() <<< 부분 잘라내기
// ㄴ splice(index) 지정한 인덱스 이후로 모두 잘라냄
// ㄴ splice(index, count) 지정한 인덱스부터 count만큼 잘라냄
arr = arr.splice(0, 1);
console.log(arr);

arr.splice(1);
console.log(arr);

arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

// 배열 반전 (뒤집기)
console.log(arr);
arr.reverse();
console.log(arr);

// 정렬 (오름차순 정렬)
arr.sort();
console.log(arr);

// 정렬(내림차순 정렬)
arr.sort();
arr.reverse();

// 포함 여부 검증
console.log(arr.includes(5));
console.log(arr.includes(0));

// 배열의 확장 (인자값으로 넣은 값들을 기존 배열에 확장하여 새로운 배열을 반환)
// A.concat(b)
// A + B 배열 반환
let arr2 = arr.concat([100]);
console.log(arr2);

// 테이블 출력 활용
console.table(arr);

// 2차원 배열을 선언 & 초기화 -> 출력
// 4행 3열 
const myArr = new Array(4); // = new Array();

// 2차원 배열 : 또 다른 배열을 값으로 갖는 배열
//myArr = [[],[],[],[]]

for(let i =0;i<4;i++){
    const row = [];
    for(let j =0;j<3;j++){
        row.push(j);
    }
    myArr.push(row);
}
console.table(myArr);