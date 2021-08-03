// 22.1 this 키워드
//     자바나 C++ 같은 클래스 기반 언어와 다르게(항상 인스턴스 가리킴), 자바스크립트의 this는 동적으로 결정됨
//     1) 객체 리터럴(this 없음) : 자바스크립트 엔진에 의해 암묵적으로 생성됨. this는 호출한 객체를 가리킴
//     2) 생성자 함수 내부 this : 생성자 함수가 생성할 인스턴스를 가리킨다.
//     여기까지가 의미 있음
//     3) 전역 참조: window
//     4) 함수 내부 참조 : window
//         strict mode -> undefined 반환
//     5) 메서드 내부 : 메서드를 호출한 객체

// 22.2 함수 호출 방식과 this 바인딩
//     함수 안에 this를 참조할 때
//     1) 일반 함수 호출(중첩 함수, 콜백 함수 포함) : window / 'strict mode'에서는 undefined
//     2) 메서드 호출 : 호출 시점. 메서드를 호출한 객체(프로토타입 메서드도 마찬가지)
//     3) 생성자 함수 호출(new) : 생성한 인스턴스를 가리킴
//     4) Function.prototype.apply/call/bind 메서드에 의한 간접 호출
//         이는 Function.prototype의 메서드임 -> 모든 함수가 상속받아 사용할 수 있다.
//         - 함수.call(this에 바인딩할 객체, 인자들) : 자세한 설명은 354p 참조
//         - 함수.apply(this에 바인딩할 객체, [인자들]) : 자세한 설명은 354p 참조
//         - 함수.bind(this에 바인딩할 객체) : 메서드의 this vs 중첩함수나 콜백함수의 this 불일치 문제 해결

//         const person = {
//             name:"Lee",
//             foo(callback){
//                 setTimeout(callback, 100)
//             }
//         }
//         person.foo(function(){
//             console.log(`Hi my name is ${this.name}`)
//         })

//         const person = {
//             name:"Lee",
//             foo(callback){
//                 setTimeout(callback.bind(this), 100)
//             }
//         }
//         person.foo(function(){
//             console.log(`Hi my name is ${this.name}`)
//         })
