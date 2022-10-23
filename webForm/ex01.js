// JSON(데이터를 표현하는 방식 또는 양식)
// ㄴ Javascript Object Notation

// Object
/*
{
    key1 : value1,
    key2 : value2,
    key3 : value3
}

{
    meta : ?,
    dacuments : ?
}
*/


//const container = document.querySelector(".container");

//jQuery.ajax();

let page = 1;
let is_end = false;
$('.back_button').hide();
function getData(){
    $('.container').empty(); // 지우기

    const keyword = $("#keyword").val();

    $.ajax({
        method:"GET",
        url:"https://dapi.kakao.com/v3/search/book",
        data:{
            query:keyword,
            page:page
        },
        headers:{
            Authorization:'KakaoAK 19b7c97ca15f8fca4ed406efef20d945'
        }
    }).done(function(response){
        console.log("response : ", response);
        const list = response.documents;
        list.forEach(e => {
            const thumbnail = e.thumbnail;
            const url = e.url;
            const title = e.title;
            const contents = e.contents;
            const author = e.authors[0];
            const publisher = e.publisher;
            const price = e.price;
    
            $('.container').append(
                `<tr>
                    <td><a href="${url}"><img src="${thumbnail}"></a></td>
                    <td>${title}</td>
                    <td>${contents}</td>
                    <td>${author}</td>
                    <td>${publisher}</td>
                    <td>${price}</td>
                </tr>`
            );
        });
        is_end = response.meta.is_end;
        if(is_end === true){
            $('.next_button').hide();
        }
        if(page===1){
            $('.back_button').hide();
            $('.next_button').show();
        }
    });
}

function getDataBack(){
    if(page > 1){
        page--;
        getData;
    }
}

function getDataNext(){

    if(is_end === false){
        page++;
        getData();
        $('.back_button').show();
    }
   
}