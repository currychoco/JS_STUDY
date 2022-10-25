// 1. prompt() 창을 통해 회원가입 정보(이름, 나이, 성별, 가족구성원)를 입력 받고 -> 
// 2. 입력받은 정보를 활용하여 -> Person 오브젝트 생성
// 3. users 배열에 push()
// 4. html 문서 상에, 버튼 이하로 -> 새로 추가된 회원 정보가 나열되어 출력

const users = []; //Person Object를 담는 배열

function Person(name, age, gender, family){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.family = family;
    this.toString = function(){
        return `name : ${this.name}, age : ${this.age}, gender : ${this.gender}, family : ${this.family} `;
    }
}

function join(){
    const name = prompt("이름을 입력하세요.");
    const age = prompt("나이를 입력하세요.");
    const gender = prompt("성별을 입력하세요.");
    const family = prompt("가족 구성원을 콤마로 나열하세요.").split(',');

    let person = new Person(name, age, gender, family)
    users.push(person);
    console.log(users)

    // $('.printUsers').append(
    //     `
    //     이름:${person.name},
    //     나이:${person.age},
    //     성별:${person.gender},
    //     가족구성:${person.family}<br/>
    //     `
    // )

    document.body.innerHTML += `<p>${person.toString()}</p>`;
}

