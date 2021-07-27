//16. 프로퍼티 어트리뷰트

// 16.1 내부 슬롯과 내부 메서드
// 둘 다 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 하용하는
//"의사 프로퍼티"와 "의사 메서드"
// [[...]]
// 1) 자바스크립트 엔진에서 실제 동작(자바스크립트 엔진의 내부 로직)
// 2) 원칙적으로 내부 슬롯, 내부 메서드에 직접적 접근 불가능
// 3) 일부는 간접적 접근 가능
//      ex) 모든 객체 : [[Prototype]] 내부 슬롯을 가짐. __proto__를 통해 간접적 접근 가능
// let obj = { name: "Kim" };
// console.log(obj);

//16.2 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// 자바스크립트 엔진은 프로퍼티 생성 시 '프로퍼티 어트리뷰트'를 '기본값으로 자동 정의'
// 1) [[Value]] : 프로퍼티 값
// 2) [[Writable]] : 갱신 가능 여부
// 3) [[Enumerable]] : 열거 가능 여부
// 4) [[Configurable]] : 재정의 가능 여부
// 이들은 직접 접근 힘듦.
// 간접 접근 예시1 : 하나의 프로퍼티에 대해
// let obj = { name: "Kim" };
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// 간접 접근 예시2 : 모든 프로퍼티에 대해
// let obj = { name: "Kim", gender: "male" };
// console.log(Object.getOwnPropertyDescriptors(obj));

// 16.3 데이터 프로퍼티와 접근자 프로퍼티
// 둘 다 직접 접근 불가
// 1) 데이터 프로퍼티 : 키와 값으로 구성된 일반적인 프로퍼티(위 예시는 다 데이터 프로퍼티)
// 어트리뷰트
//  [[Value]] : 프로퍼티 값이 정의되거나 변경되면 [[value]]에 값을 재할당
//  [[Writable]] : 불리언 값, 기본값 true, false일 경우 [[value]]값 변경 불가(읽기 전용)
//  [[Enumerable]] : 불리언 값, 기본값 true, false일 경우 for..in나 Object.keys 메서드로 열거 불가
//  [[Configurable]] : 불리언 값, 기본값 true, false일 경우 해당 프로퍼티 삭제, 프로퍼티 어트리뷰트 변경 불가
// 2) 접근자 프로퍼티 : 자체적으로 값을 가지지 않는(가상) '접근자 함수'로 구성된 프로퍼티
// 어트리뷰트
//  [[Get]] : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 '읽을 때' 호출.
//            호출하면 [[Get]]의 값, 즉 getter 함수 호출 -> 그 결과가 프로퍼티 값으로 '반환'
//  [[Set]] : 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 '저장할 때' 호출.
//            접근자 프로퍼티 키로 프로퍼티 값 저장 시 [[Set]]의 값, 즉 setter 함수 호출 -> 결과가 프로퍼티 값으로 '저장'
//  [[Enumerable]] : 불리언 값, 기본값 true, false일 경우 for..in나 Object.keys 메서드로 열거 불가
//  [[Configurable]] : 불리언 값, 기본값 true, false일 경우 해당 프로퍼티 삭제, 프로퍼티 어트리뷰트 변경 불가
// 에시
// const person = {
//     firstName: "Kim",
//     lastName: "youngyin",
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value) {
//         [this.firstName, this.lastName] = value.split(" ");
//     },
// };
// console.log(person);
// console.log(person.fullName);
// person.fullName = "park john";
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(Object.getOwnPropertyDescriptor(person, "fullName"));

// 16.4 프로퍼티 정의
//  객체에 새로운 프로퍼티를 추가할 때, 프로퍼티 어트리뷰트를 명시적으로 정의/재정의
//  데이터 프로퍼티, 접근자 프로퍼티 모두 설정 가능
//  굳이 다 안 적어줘도 default 값으로 정의됨
//  (value, get, set의 기본값은 Undefined)
// const person = {};
// Object.defineProperty(person, "firstName", {
//     value: "Kim",
//     writable: false,
//     enumerable: true,
//     configurable: true,
// });
// let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
// console.log("firstName : ", descriptor);

// 16.5 객체 변경 방지
// 금지된 것을 실행해도 무시됨. 오류는 나지 않음. strict mode에서는 에러
// 1) 객체 확장 금지 : 프로퍼티 추가 x, 프로퍼티 삭제, 값 읽기, 값 쓰기 가능, 프로퍼티 어트리뷰트 재정의 가능
//    방법 : Object.preventExtensions(객체)
//    확장 가능 여부 확인 : Object.isExtensible(객체)
// 2) 객체 밀봉 : 프로퍼티 추가, 삭제 x, 프로퍼티 값 읽기, 쓰기 가능, 프로퍼티 어트리뷰트 재정의 x
//    방법 : Object.seal(객체) -> configurable : false
//    밀봉 여부 확인 : Object.isSealed(객체)
// 3) 객체 동결 : 프로퍼티 값 읽기만 가능. 나머지 다 불가
//    방법 : Object.freeze(객체)
//    밀봉 여부 확인 : Object.isFrozen(객체)
//    주의 : 중첩 객체까지 동결할 수는 없음. 재귀적으로 메서드 반복 호출 필요..
