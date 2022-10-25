// 이벤트 리스너 Event Listener

// 1. 기본활용
// 1-1) bubbling이 기본 동작임
// 문서요소 .addEventListener('이벤트명', e=>{
//   이벤트처리문; 
//});

// 2. 세번째 파라미터, 옵션에 대한 설정

// 2-1) capture 설정으로 bubbling을 뒤집을 수 있다
// 문서요소 addEventListener('이벤트명', e=>{
//    이벤트처리문:
//},{capture:true});

// * stopPropagation() 함수를 통해, 이벤트 전파 방지 가능

// 2-2_ once 설정으로 1회 동작 후, 이벤트를 소멸시킬 수 있다.
// 문서요소 addEventListener('이벤트명', e=>{
//    이벤트처리문:
//},{once:true});

// * preventDefault() 함수를 통해, 기본 동작 이벤트를 방지 가능(예.form의 submit)

// 2-3) passive 설정으로 기본동작방지를 무시할 수 있다
// 문서요소 addEventListener('이벤트명', e=>{
//    이벤트처리문:
//},{passive:true});