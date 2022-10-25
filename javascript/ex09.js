// 이벤트 리스너
// ㄴ 문서의 요성 직접 addEventListener() 붙여서 이벤트에 대한 처리를 작성

const bell = document.body.querySelector('#bell');

// addEventListener(이벤트명, 실행할함수);
bell.addEventListener('click', e=>{
    alert('띵동-');
});
//bell.addEventListener('click', alert('띵동-'));

const father = document.body.querySelector('.father');
const son = document.body.querySelector('.son');
const baby = document.body.querySelector('.baby');

// father.addEventListener('click',e=>{
//     console.log('father');
// },{capture:true});
son.addEventListener('click',e=>{
    console.log('son');
    //e.stopPropagation(); // 이벤트 전파 금지
},{capture:true});
baby.addEventListener('click',e=>{
    //console.log('baby');
},{capture:true});

// father.addEventListener('click',e=>{
//     console.log('father');
// },{once:true});
son.addEventListener('click',e=>{
    console.log('son');
    //e.stopPropagation(); // 이벤트 전파 금지
},{once:true});
baby.addEventListener('click',e=>{
    //console.log('baby');
},{once:true});

const form = document.body.querySelector('form');
form.addEventListener('submit',e=>{
    e.preventDefault(); // 기본 동작 방지
    console.log('기본 동작은 더이상 처리되지 않는다.');
},{passive:true});