// 20.1 strict mode란?
// ES5 -> strict mode 추가(명시적 에러)
// function foo() {
//     x=10;
// }
// foo();

// console.log(x)
// 참조 에러가 날 것 같지만 '암묵적 전역' 현상으로 인해 10이 출력

// 20.2 stict mode가 발생시키는 에러
// 1) 암묵적 전역 : ReferneceError
// 2) 변수, 함수, 매개변수의 삭제(delete 연산자) : SyntaxError
// 3) 중복된 매개변수 이름 : SyntaxError
// 4) with 문 사용(전달된 객체를 스코프 체인에 추가) : SyntaxError... 사용하지 말자

// 20.3 strict mode 주의
// 1) 전역에 strict mode를 적용하는 것은 피하자(사용한 스크립트와 사용하지 않은 스크립트 혼혼용 위험)
// 2) 함수 단위 strict mode 적용 피하자(번거롭고 굳이..)
// 3) 일반 함수를 호출할 때는 this는 undefined(로 바인딩됨)
// 4) 매개변수에 전달된 인수를 재할당하여 변경해도 arguments 객체에 반영되지 않는다.
