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
$('.next_button').hide();

function searchData() {
    page = 1;
    getData();
}

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
            const salePrice = e.sale_price;
    
            $('.container').append(
                `<div>
                    <div>
                        <a href="${url}"><img src="${thumbnail}"></a>
                    </div>
                    <div>
                        <span>제목: ${title}</span><br>
                        <span>가격: <del class="price">${price} -></del> 세일가: <span class="sale-price">${salePrice}원</span></span>
                    </div>
                </div>`
            );
        });
        is_end = response.meta.is_end;

        $('.back_button').hide();
        $('.next_button').hide();

        if(is_end !== true){
            $('.next_button').show();
        }
        if(page!==1){
            $('.back_button').show();
        }
    });
}

function getDataBack(){
    if(page > 1){
        page--;
        getData();
    }
}

function getDataNext(){

    if(is_end === false){
        page++;
        getData();
        $('.back_button').show();
    }
   
}