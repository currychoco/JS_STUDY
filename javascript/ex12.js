// Date Object

const date = new Date();
console.log(date);

date.setHours(0,0,0,0); // 자정으로 맞추기
console.log(date.toLocaleString());

console.log(date.getTime()); 
// 1970-01-01.00:00:00.000 기준으로 현재까지 지나온 ms을 반환

// const date2 = new Date(date.getTime + 1000);
// console.log(date2);
const date2 = new Date('2022-10-25');
date2.setHours(0,0,0,0);
console.log(date2.toLocaleDateString());
// getter 사용
// 년, 월, 일, 요일, 시, 분, 초, 밀리초를 콘솔에 출력
// 특이점 2가지 발견 -> 줌챗에 메세지
console.log(date.getFullYear(),'년');
console.log(date.getMonth(),'월'); // 0~11
console.log(date.getDate(),'일');
console.log(date.getDay(),'요일'); // 0(일)~6(토)
console.log(date.getHours(),'시');
console.log(date.getMinutes(),'분');
console.log(date.getSeconds(),'초');
console.log(date.getMilliseconds(),'밀리초');

// 스레드
// setInterval(실해할함수명, 밀리세컨드);
// clearInterval() 호출로 스레드 중지를 하기 위해서는 ->
// setInterval() 함수 호출을 익명함수 안에서 처리해야 함
const thread = setInterval(func, 1000);

let n =0;
function func(){
    n++;
    console.log(n);

    if(n===10){
        clearInterval(thread); // 중단할 함수가 실행되는 변수를 인자로 넘김
    }
}

// d-day counter 프로젝트 폴더
// index.html
// dday.js
// dday.css

// 실시간으로 현재 시간을 보여주는 타이머가 있고,
// form 안에서 디데이 연산을 할 날짜를 입력받아 
// 이벤트명과 디데이를 표기해 주는 서비스