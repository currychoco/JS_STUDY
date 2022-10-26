const map = document.body.querySelector('.map');

const SIZE = 3;
let mark = [];
let turn = 1;
let win = 0;

// set map
for (let i =0;i<SIZE;i++){
    const row = [];
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class', 'row');
    for(let j=0;j<SIZE;j++){
        row.push(0);
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.setAttribute('id', `y${i}x${j}`);
        box.addEventListener('click', e=>{
            const yx = box.getAttribute('id');
            const y = parseInt(yx.charAt(1));
            const x = parseInt(yx.charAt(3));

            if(mark[y][x] === 0){
                if(turn === 1){
                    box.setAttribute('style', 'background-color : #FF731D');
                }else{
                    box.setAttribute('style', 'background-color : #1746A2');
                }
                mark[y][x] = turn;
                checkWin();
                turn = turn == 1? 2 : 1;
            }
        });
        mapRow.append(box);
    }
    mark.push(row);
    map.append(mapRow);
}

function checkWin(){
    // 가로
    for(let i =0;i<SIZE;i++){
        let cnt = 0;
        for(let j =0;j<SIZE;j++){
            if(mark[i][j] === turn){
                cnt++;
                if(cnt === 3){
                    win = turn;
                    break;
                }
            }
        }
        if(win !== 0){
            break;
        }
    }
    // 세로
    for(let i = 0; i < SIZE; i++){
        let cnt = 0;
        for(let j = 0; j<SIZE;j++){
            if(mark[j][i] === turn){
                cnt++;
                if(cnt === 3){
                    win = turn;
                    break;
                }
            }
        }
        if(win !== 0){
            break;
        }
    }

    // 대각선 왼-오
    let cnt = 0;
    for(let i = 0; i< SIZE;i++){
        if(mark[i][i] === turn){
            cnt++;
        }else{
            break;
        }
    }
    if(cnt === 3){
        win = turn;
    }

    // 대각선 오-왼
    cnt = 0;
    for(let i = 0; i<SIZE; i++){
        if(mark[i][SIZE-(i+1)] === turn){
            cnt++;
        }else{
            break;
        }
    }
    if(cnt === 3){
        win = turn;
    }

    if(win === turn){
        alert(`P${win} is Win!!!`);
        location.reload();
    }
}