// 자료형 : 오브젝트
// JSON(Javascript Object Notation)의 원형

// 오브젝트 자료형은 {} 중괄호 안에 
// key : value를 나열하여 담음(,콤마)
const person ={
    name : '홍길동',
    age : 30,
    likes : ['music','movie','flower']
}

// 오브젝트 안의 값 참조
// 오브젝트 변수 뒤에 .닷을 붙여서 key를 통해 value를 얻음
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.likes);
console.log(person.likes.length)
