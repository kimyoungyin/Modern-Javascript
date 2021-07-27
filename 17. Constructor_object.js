// 17. 생성자 함수에 의한 객체 생성

// 17.1 Object 생성자 함수(기본)
// const person = new Object()
// -> 빈 객체 생성. 이후 프로퍼티, 메서드 추가하여 완성 가능
// -> 그렇게 유용하지는 않다
// 생성자 함수 : new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수
// 인스턴스 : 생성자 함수에 의해서 생성된 객체

// 17.2 생성자 함수
// 1) 객체 리터럴에 의한 객체 생성보다 생성자 함수에 의한 객체 생성의 장점
//  재사용 : 구조가 동일한 객체 여러 개를 간편하게 생성 가능
// 2) this 바인딩의 결정(함수 호출 방식에 따라 결정)
// - 일반 함수 호출 : 전역 객체를 가리킴
// - 메서드로 호출 : 메서드를 호출한 객체(마침표 앞 객체)
// - 생성자 함수로서 호출 : 생성자 함수가 (미래에) 생성할 인스턴스
// 3) 생성자 함수의 인스턴스 생성 과정
// -> 암묵적으로 빈 객체(인스턴스) 생성
// -> 인스턴스는 this에 바인딩(런타인 이전)
// -> this에 바인딩되어 있는 인스턴스를 초기화
// -> 완성된 인스턴스가 바인딩된 this가 암묵적을 반환

// 주의 : 생성자 함수가 다른 객체를 반환하면 this가 반환되지 앟음
// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2 + this.radius;
//     };
//     return {};
// }
// const circle2 = new Circle(10);
// console.log(circle2.getDiameter);

// 4) 내부 메서드 [[Call]], [[Construct]]
// 일반 객체가 아닌 함수가 가지는 내부 메서드임
// 일반 객체와 다르게 함수가 '호출' 가능한 이유 : [[Call]], [[Construct]] 내부 메서드
// 특히 생성자 함수로서 호출될 수 있는 이유 : [[Construct]] 내부 메서드
// [[Call]]을 갖는 함수 객체 = callable
// [[Construct]]를 갖는 함수 객체 = constructor <-> non-constructor
// 모든 함수는 callable, 생성자 함수만 constructor
// 함수 정의에 따라 나뉨
// - constructor인 함수 : 함수 선언문, 함수 표현식, 클래스(클래스도 함수임)
// - non-constructor 함수 : 메서드, 화살표 함수

// 5) new 연산자
//     new 연산자를 통해 함수를 호출하면 [[Construct]]가 호출됨
//     생성자 함수는 파스칼 케이스로 명명하도록 함

// 6) new.target(ES6)(IE는 지원 안함)
//     '생성자 함수'가 new 연산자 없이 호출되는 위험을 회피하기 위해 new.target 사용
//     생성자 함수 내부에서 조건으로 작성함. new를 통해 호출되면 true
//     function Circle(radius) {
//         if (!new.target) {
//             return new Circle(radius)
//         }
//         this.radius = radius
//         this.getDiameter = function () {
//             return 2*this.radius;
//         };
//     }
// 이렇게 하면 실수로 new를 생략하더라도 new 연산자를 이용한 것처럼 호출됨
