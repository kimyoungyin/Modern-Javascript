// 23. 실행 컨텍스트
//     자바스크립트 동작 원리를 담고 있는 핵심 개념이다. 스코프 기반으로
//     식별자와 식별자에 바인딩된 값 관리 방식
//     호이스팅이 발생하는 이유
//     클로저의 동작 방식
//     테스크 큐와 함께 동작하는 이벤트 핸들러
//     비동기 처리 동작 방식

// 23.1 소스코드의 타입
//     ECMAScript 사양은 소스코드(ECMAScript code)를 4가지 타입으로 구분. 각각 실행 컨텍스트를 생성
//     1) 전역 코드 : 전역에 정의된 함수, 클래스 등의 내부 코드는 포함
//         전역 코드가 평가되면 전역 실행 컨텍스트가 생성됨
//         -> 전역 스코프 생성(최상위)
//         -> var 키워드로 선언된 전역 변수, 함수 선언문으로 정의된 전역 함수를
//            전역 객체의 프로퍼티와 메서드로 바인딩하고 참조하기 위해 '전역 객체'와 연결

//     2) 함수 코드 : 함수 내부에 중첩된 함수, 클래스 등의 내부 코드는 포함 안함
//         함수 코드가 평가되면 함수 실행 컨텍스트가 생성됨
//         -> 지역 스코프를 생성
//         -> 지역 변수, 매개변수, arguments 객체를 관리
//         -> 지역 스코프를 전역 스코프에서 시작하는 스코프 체인의 일원으로 연결

//     3) eval 코드 : 빌트인 전역 함수인 eval 함수에 인수로 전달되어 실행되는 소스코드
//         eval 코드가 평가되면 eval 실행 컨텍스트가 생성됨
//         -> eval 코드는 strict mode 에서 자신만의 독자적인 스코프 생성

//     4) 모듈 코드 : 모듈 내부의 함수, 클래스 등의 내부 코드는 포함 안함

// 23.2 소스코드의 평가와 실행
