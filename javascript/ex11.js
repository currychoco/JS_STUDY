// 이벤트 버블링을 활용한 "이벤트 위임"

const list = document.body.querySelector('ol');

list.addEventListener('click',e=>{
    if(e.target.tagName === 'INPUT'){
        if(e.target.checked){
            alert('done'
            );
        }
    }
});