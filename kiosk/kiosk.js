const map = document.body.querySelector('.map');

const cakePrice = 4000;
const sandwichPrice = 3000;
const coffeePrice = 1500;
const orangeJuicePrice = 2000;

let cakeCnt = 3;
let sandwichCnt = 5;
let coffeeCnt = 10;
let orangeJuiceCnt = 7;

let userCakeCnt = 0;
let userSandCnt = 0;
let userCoffeeCnt = 0;
let userOrangeCnt = 0;

mainMenu();
// 메인 화면
// 관리자 화면
// 사용자 화면
function mainMenu(){
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class', 'row');
    for(let i = 0;i<2;i++){
        const box = document.createElement('div');
        box.setAttribute('class', 'mainMenu');
        box.setAttribute('id', `me${i}`);
        const h3 = document.createElement('h3');
        h3.setAttribute('class', 'main');
        if(i === 0){
            h3.innerHTML = '관리자 화면';
        }else{
            h3.innerHTML = '사용자 화면';
        }
        box.append(h3);
        box.addEventListener('click', e=>{
            for(let j = 0; j < 2; j++){
                const del = document.getElementById(`me${j}`);
                del.remove();
            }
            const menu = parseInt(box.getAttribute('id').charAt(2));
            console.log(menu);
            if(menu === 0){
                managerMenu();
            }else{
                customerMenu();
            }
        });
        mapRow.append(box);
    }
    map.append(mapRow);
}

// 관리자 화면
function managerMenu(){
    // 물건 채우기
    // 잔돈 채우기
    // 뒤로 가기
    
}

// 사용자 화면
function customerMenu(){
    // 식품 메뉴
    // 결제
    // 뒤로 가기
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class', 'row');
    for(let i =0;i<3;i++){
            const box = document.createElement('div');
            box.setAttribute('class', 'customerMenu');
            box.setAttribute('id', `cu${i}`)
            const h3 = document.createElement('h3');
            h3.setAttribute('class', 'customer');
            if(i === 0){
                h3.innerHTML = '메뉴';
            }else if(i === 1){
                h3.innerHTML = '결제';
            }else if (i === 2){
                h3.innerHTML = '뒤로 가기';
            }
            box.append(h3);
            box.addEventListener('click',e=>{
                for(let j = 0; j < 3; j++){
                    const del = document.getElementById(`cu${j}`);
                    del.remove();
                }
                const menu = parseInt(box.getAttribute('id').charAt(2));
                if(menu === 0){
                    foodMenu();
                } else if(menu === 1){

                } else{
                    mainMenu();
                }
            });
            mapRow.append(box);
    }
    map.append(mapRow);
}

function foodMenu(){
    const mapRow = document.createElement('div');
    mapRow.setAttribute('class', 'row');
    for(let i =0;i<5;i++){
        const box = document.createElement('div');
        box.setAttribute('class', 'foodMenu');
        box.setAttribute('id', `fo${i}`);
        const h3 = document.createElement('h3');
        h3.setAttribute('class', 'food');
        if(i === 0){
            h3.innerHTML = `조각케이크 : ${cakePrice}`;
        }else if(i === 1){
            h3.innerHTML = `샌드위치 : ${sandwichPrice}`;
        }else if (i === 2){
            h3.innerHTML = `커피 : ${coffeePrice}`;
        }else if(i === 3){
            h3.innerHTML = `오렌지 주스 : ${orangeJuicePrice}`;
        }else{
            h3.innerHTML = '뒤로 가기';
        }
        box.append(h3);
        box.addEventListener('click', e=>{
            const menu = parseInt(box.getAttribute('id').charAt(2));
            if(menu === 0){
                cakeCnt--;
                userCakeCnt++;
                //map.innerHTML += `<p>케이크 : ${userCakeCnt}개</p>`;
            }else if(menu === 1){
                sandwichCnt--;
                userSandCnt++;
            }else if(menu === 2){
                coffeeCnt--;
                userSandCnt++;
            }else if(menu === 3){
                orangeJuiceCnt--;
                userOrangeCnt++;
            }else{
                for(let j = 0; j < 5; j++){
                    const del = document.getElementById(`fo${j}`);
                    del.remove();
                }
                customerMenu();
            }
        });
        mapRow.append(box);
    }
    map.append(mapRow);
}