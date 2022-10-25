// 실시간으로 현재 시간을 보여주는 타이머가 있고,
// form 안에서 디데이 연산을 할 날짜를 입력받아
// 이벤트 명과 디데이를 표기해 주는 서비스


const time = document.body.querySelector('.time');
const printdate = document.body.querySelector('.dday');

const form = document.body.querySelector('form');
form.addEventListener('submit',e=>{
    e.preventDefault(); // 기본 동작 방지
    const content = document.body.querySelector('.dateContent').value;
    const uDate = document.body.getElementsByClassName('userDate').value;
    printdate.innerHTML += `${content}까지 ${calcDday(uDate)}일</br>`;
    console.log(content);
});

function calcDday(uDate){
    const userDate = new Date(uDate);
    const curDate = new Date();
    
    const sub = userDate - curDate;
    console.log(sub);
    const dday = sub / (1000*60*60*24);
    return dday;
};

function getTime(){
    const date = new Date();
    let hours = String(date.getHours());
    let min = String(date.getMinutes());
    let sec = String(date.getSeconds());

    if(hours.length == 1){
        hours = '0'.concat(hours);
    }
    if(min.length == 1){
        min = '0'.concat(min);
    }
    if(sec.length == 1){
        sec = '0'.concat(sec);
    }

    time.innerHTML = `${hours}:${min}:${sec}`;
}

getTime();
setInterval(getTime, 1000);