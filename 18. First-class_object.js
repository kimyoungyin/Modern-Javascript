// 18. 함수와 일급 객체

// 18.1 일급 객체
//     1) 무명의 리터럴로 생성할 수 있다. 즉 런터임에 생성이 가능하다
//     2) 변수와 자료구조(객체, 배열 등)에 저장할 수 있다
//     3) 함수의 매개변수에 전달할 수 있다
//     4) 함수의 반환값으로 사용할 수 있다.
//     자바스크립트의 '함수'는 위의 조건을 모두 만족하므로 '일급 객체'
//     -> 함수형 프로그래밍 가능

// 18.2 함수 객체의 프로퍼티
// function square(number) {
//     return number ** 2;
// }
// console.dir(square);
// console.log(Object.getOwnPropertyDescriptors(square));
// 상속 받은게 아닌, 순수 자기 프로퍼티 확인함. __proto__는 상속받은 접근자 프로퍼티임

//     함수만 가지는 함수의 데이터 프로퍼티
//     1) arguments : 호출 시 받는 인수 프로퍼티. 키는 인덱스, 값은 인수
//         인수 개수가 정해지지 않았을 때, ES6 Rest 파라미터(...무언가) 도입
//     2) caller : 비표준 프로퍼티. 생략
//     3) length : 매개변수의 개수를 가리키는 프로퍼티. arguments 개수와 다를 수 있음
//     4) name : 함수 이름을 나타내는 프로퍼티. 가변 함수 표현식이면 함수 이름이, 익명 함수 표현식이면 함수 식별자를 가리킴
//         let namedFunc = function foo() {};
//         let annonymousFunc = function(){}
//         console.log(namedFunc.name)
//         console.log(annonymousFunc.name)
//     5) __proto__ 접근자 프로퍼티
//         모든 객체는 [[Prototype]]이라는 내부 슬롯을 가짐. 이는 상속을 구현하는(상속해준) 프로토타입 객체(상속자?)를 가리킴(19장)
//         __proto__ 프로퍼티는 위 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해 사용하는 '접근자 프로퍼티'.
//         내부 슬롯에는 직접 접근할 수 없기 때문에..
//         const obj = {a:1}
//         console.log(obj.__proto__ === Object.prototype);
//     6) prototype 프로퍼티
//         생성자 함수로 호출할 수 있는 함수(constructor)만 소유한는 프로퍼티
//         즉, 객체 리터럴이나 화살표 함수로 선언한 non-constructor는 prototype 프로퍼티 없음
//         constructor(생성자 함수)가 생성할 인스턴스의 프로토타입 객체를 가리킴.
// 여긴 자동 수정되서 안돼서 브라우저 콘솔로 직접 보여줘야
// (function (){}).hasOwnProperty("prototype")
// ({}).hasOwnProperty('prototype')
