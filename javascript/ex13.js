// 엘리먼트 생성자
// ㄴ 자바스크립트로 문서에 요소를 추가하는 것

const container = document.body.querySelector('.container');

// 새로 생성한 엘리먼트(요소)
// 1. 엘리먼트 생성
// ㄴ document.createElement(태그명);
const newEle = document.createElement('div');

// * append 하기 전에 추가할 엘리먼트의 속성을 모두 설정 해두기
// 1) setAttribute(속성명, 속성값)
newEle.setAttribute('class', 'child');
// 2) getAttribute(속성명)
console.log(newEle.getAttribute('class'));
newEle.innerText = 'hello';

// 2. 엘리먼트 추가
// ㄴ 문서(부모 요소)에 추가
// ㄴ Parent.append(Child);
// ㄴ Parent.appendChild(Child);
container.append(newEle);

// 3. 엘리먼트 삭제
// ㄴ Parent.removeChild(Child);
container.removeChild(newEle);
