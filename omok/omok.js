const map = document.body.querySelector('.map');
const player = document.body.querySelector('.turn');
const restSec = document.body.querySelector('.time');

const SIZE = 10;
let turn = 1;
let mark = [];
let win = 0;

let setTime;
let sec;
let interval;

let overTime = false;

// 시작시
function start(){
    startTimer();
    setmap();
}

function setmap(){
    // map 생성
    player.innerHTML = `[<b>player${turn}</b>] 차례입니다.`;
    for(let i = 0; i < SIZE; i++){
        let row = [];
        const mapRow = document.createElement('div');
        mapRow.setAttribute('class', 'row');
        for(let j =0;j<SIZE;j++){
            row.push(0);
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.setAttribute('id', `by${i}x${j}`);
            const p = document.createElement('p');
            p.setAttribute('id', `y${i}x${j}`);
            p.setAttribute('class', 'mark');
            box.append(p);
            box.addEventListener('click', e=>{
                startTimer();
                const num = Number(e.target.innerHTML);
                const yx = box.getAttribute('id');
                const y = yx.charAt(2);
                const x = yx.charAt(4);

                if(mark[y][x] === 0){
                    if(turn === 1){
                        const text = document.createTextNode('○');
                        p.appendChild(text);
                    }else{
                        const text = document.createTextNode('●');
                        p.appendChild(text);
                    }
                    mark[y][x] = turn;
                    checkWin();
                    turn = turn == 1 ? 2 : 1;
                    player.innerHTML = `[<b>player${turn}</b>] 차례입니다.`;
                }
            });
            mapRow.append(box);
        }
        mark.push(row);
        map.append(mapRow);
    }
}

// 초
function startTimer(){
    setTime = new Date();
    interval = setInterval(timer, 500);
}
function calcTime(){
    const curTime = new Date();
    const curMilTime = curTime.getTime();
    const setMilTime = setTime.getTime();
    const div = Math.floor((curMilTime - setMilTime)/1000)
    sec = 10 - div;

    return String(sec);
}
function timer(){ 
    if(sec <= 0){
        stopTimer();
        const xy = randomXY();
        const x = parseInt(xy.charAt(1));
        const y = parseInt(xy.charAt(0));
        if(mark[y][x] === 0){
            const p = document.body.querySelector(`#y${y}x${x}`);
            if(turn === 1){
                p.innerHTML = '○';
            }
            else{
                p.innerHTML = '●';
            }
            mark[y][x] = turn;
            checkWin();
            turn = turn == 1 ? 2 : 1;
            player.innerHTML = `[<b>player${turn}</b>] 차례입니다.`;
            startTimer();
            }
    }
    restSec.innerHTML =`남은 시간 : ${calcTime()}초`;
}
function stopTimer(){
    clearInterval(interval);
}

// 랜덤 좌표
function randomXY(){
    let y;
    let x;
    while(true){
        y = Math.floor(Math.random()*SIZE);
        x = Math.floor(Math.random()*SIZE);
        if(mark[y][x] === 0){
            break;
        }
    }
    y=String(y);
    x=String(x);
    return y.concat(x);
}

// 승리 조건 계산
function checkWin(){
    // 가로
    for(let i = 0; i < SIZE; i++){
        let cnt = 0;
        for(let j = 0; j<SIZE;j++){
            if(mark[i][j] === turn){
                cnt++;
                if(cnt === 5){
                    win = turn;
                    console.log('가로');
                    break;
                }
            }else{
                cnt = 0;
            }
        }
        if(win !== 0){
            break;
        }
    }
    
    // 세로
    for(let i =0;i<SIZE;i++){
        let cnt = 0;
        for(let j =0; j < SIZE; j++){
            if(mark[j][i] === turn){
                cnt++;
                if(cnt === 5){
                    win = turn;
                    console.log('세로');
                    break;
                }
            }else{
                cnt = 0;
            }
        }
        if(win !== 0){
            break;
        }
    }

    // 왼-오
    for (let i = 0; i <= 5; i++) {
        let x = -1;
        for (let j = 0; j <= 5; j++) {
            let y = i;
            let isExist = false;
            cnt = 0;
            if (mark[i][j] === turn) {
                x = j;
                isExist = true;
            }
            if (isExist) {
                for (let j = 0; j < 5; j++) {
                    if (mark[y][x] === turn) {
                        cnt++;
                        if (cnt === 5) {
                            win = turn;
                            console.log('왼-오');
                            break;
                        }
                    } else {
                        cnt = 0;
                    }
                    y++;
                    x++;
                }
            }
            if(win !== 0){
                break;
            }
        }
        if(win !== 0){
            break;
        }
    }

    // 오-왼
    for(let i = 4; i < SIZE; i++){
        let x = -1;
        for(let j = 0; j <= 5; j++){
            if(mark[i][j] === turn){
                let y = i;
                x = j;
                let cnt = 0;
                for(let k = 0; k< 5; k++){
                    if(mark[y][x] === turn){
                        cnt++;
                        if(cnt === 5){
                            win = turn;
                            console.log('오-왼');
                            break;
                        }
                    }else{
                        break;
                    }
                    y--;
                    x++;
                }
            }
            if(win !== 0){
                break;
            }
        }
        if(win !== 0){
            break;
        }
    }

    // 승리시
    if(win !== 0){
        alert(`P${turn}(이)가 승리하였습니다!`);
        location.reload();
    }
}