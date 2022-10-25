// 오브젝트 프로토타입 생성자 만들기
// Object Prototype Constructor

// function 선언식 활용
function Person(name, age){
    this.name = name;
    this.age = age;
    this.toString = function(){ //익명 함수를 활용 -> 함수도 담을 수 있음 
        return `name: ${this.name}, age: ${this.age}`;
    }
}

// 생성자 활용 오브젝트 초기화
const gildong = new Person('홍길동', 30);
console.log(gildong);
console.log(gildong.name);
console.log(gildong.toString());