// 실시간으로 현재 시간을 보여주는 타이머가 있고,
// form 안에서 디데이 연산을 할 날짜를 입력받아
// 이벤트 명과 디데이를 표기해 주는 서비스


const time = document.body.querySelector('.time');

const form = document.body.querySelector('form');
form.addEventListener('submit',e=>{
    e.preventDefault(); // 기본 동작 방지
    const content = document.body.querySelector('.dateContent').value;
    const start = document.body.querySelector('.start').value;
    const end = document.body.querySelector('.end').value;

    document.body.querySelector(".user-text").innerHTML = content;
    document.body.querySelector(".dday").innerHTML = `D-${calcDday(start, end)}`;

    document.body.querySelector(".before-input").style.display = "none";

    document.body.querySelector(".after-header").style.display = "block";

});

function calcDday(start, end){ 
    const sday = new Date(start);
    const eday = new Date(end); 
    const sub = eday - sday;
    console.log(sub);
    const dday = Math.floor(sub / (1000*60*60*24));
    return dday;
};

function getTime(){
    const date = new Date();
    let hours = String(date.getHours());
    let min = String(date.getMinutes());
    let sec = String(date.getSeconds());
    let day = date.getDay();

    if(hours.length == 1){
        hours = '0'.concat(hours);
    }
    if(min.length == 1){
        min = '0'.concat(min);
    }
    if(sec.length == 1){
        sec = '0'.concat(sec);
    }

    switch(day){
        case 0: day = '일'; break;
        case 1: day = '월'; break;
        case 2: day = '화'; break;
        case 3: day = '수'; break;
        case 4: day = '목'; break;
        case 5: day = '금'; break;
        case 6: day = '토'; break;
    }

    time.innerHTML = `${hours}:${min}:${sec}(${day})`;
}

getTime();
setInterval(getTime, 1000);