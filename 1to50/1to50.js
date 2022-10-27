const map = document.body.querySelector('.map');
const time = document.body.querySelector('.time');

const SIZE = 5;

let front = new Set();
let back = new Set();

while(front.size < SIZE * SIZE){
    const rfront = Math.floor(Math.random() * (SIZE*SIZE)) + 1;
    front.add(rfront);
}
while(back.size < SIZE * SIZE){
    const rback = Math.floor(Math.random() * (SIZE*SIZE)) + (SIZE*SIZE) + 1;
    back.add(rback);
}

front = Array.from(front);
back = Array.from(back);

console.log(front);
console.log(back);

let cnt = 1;
// set map
for(let i = 0; i < SIZE; i++){
    //const row = [];
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class', 'row');

    for(let j =0;j<SIZE;j++){
    
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        let text = document.createTextNode(front.pop());
        const num = document.createElement('p');
        num.appendChild(text);
        box.append(num);

        box.addEventListener('click', e=>{
            const userNum = Number(e.target.innerHTML);
            if(userNum === cnt) {
                if(cnt === 1){
                    startTimer();
                }

                if(cnt <= SIZE*SIZE){
                    let ftext = document.createTextNode(back.pop());
                    num.replaceChildren(ftext);
                    cnt++;
                }else{
                    let endText = document.createTextNode('');
                    num.replaceChildren(endText);
                    cnt++;
                }
                if(cnt > SIZE*SIZE*2){
                    stopTimer();
                }
            }
            
        });
        mapRow.append(box);
    }
    map.append(mapRow);
}

let sec = 0;
let msec = 0;
let startTime;
function startTimer(){
    startTime = new Date();
    setInterval(timer, 5);
}

function printTime(){
    time.innerHTML = "0:00";
}

function timer(){
    const curTime = new Date();
    const sub = curTime.getTime() - startTime.getTime();
    sec = Math.floor(sub / 1000);
    msec = sub % 1000;
    msec = Math.floor(msec/10);
    let s=String(sec);
    let m =String(msec);
    if(m.length === 1){
        m = '0'.concat(m);
    }
    time.innerHTML = `${s}:${m}`;
}

function stopTimer(){
    clearInterval(timer);
    let s=String(sec);
    let m=String(msec);
    alert(`게임 종료 : ${s}:${m}`);
    location.reload();
}

printTime();