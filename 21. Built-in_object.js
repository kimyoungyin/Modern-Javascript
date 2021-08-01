// 21.1 자바스크립트 객체의 분류
//     1) 표준 빌트인 객체 : ECMAScript 사양에 정의된 객체. 자바스크립트 실행 환경과 관계없이 사용 가능
//     2) 호스트 객체 : ECMAScript 사양에 정의되지는 않으나, 브라우저 실행 환경에서 추가로 제공
//         - 브라우저 : DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimationFrame, SVG, Web Storage, Web CompositionEvent, Web worker
//         - Node.js : Node.js 고유의 API
//     3) 사용자 정의 객체 : 사용자가 직접 정의한 객체

// 21.2 표준 빌트인 객체(40여 개)
//     1) 인스턴스 생성 불가. 정적 메서드만 제공 : Math, Reflect. JSON
//     2) 인스턴스 생성 가능(생성자 함수 객체), 정적 메서드 제공 : 나머지

// 21.3 원시값과 래퍼 객체
//     1) new String, Number, Boolean을 사용할 필요는 없다. 권장하지 않음
//      -> 원시값(문자열이나 숫자 타입 등) 암묵적으로 '.메서드'로 호출하면 그 순간 객체처럼 변환되기 때문에(이후 다시 돌아온다)
//     2) 내부 슬롯 관련된 상세 내용은 책 참조(p. 322)

// 21.4 전역 객체
//     1) 전역 객체란 : 코드가 실행되기 '이전 단계'에서 어떤 '자바스크립트 엔진'에 의해 어떤 객체보다도 '먼저 생성'되는 특수한 객체
//     2) 전역 객체 식별자
//         - this, window, self, frames(브라우저 환경)
//         - this, global(Node.js 환경) 등
//         -> (ES11) globalThis(두 환경을 모두 통일한 식별자)
//     3) 전역 객체의 프로퍼티 : 호스트 객체 + var 로 선언한 전역 변수(함수)
//     4) 모든 빌트인 객체의 최상위 객체임
//         - 개발자 의도적 생성 불가(생성자 함수 제공 안됨)
//         - 전역 객체의 프로퍼티 참조시 window, global 생략 가능(전역 변수나 전역 함수처럼 사용 가능)
//             window.parseInt === parseInt
//     5) 주의사항 : 브라우저 환경에서 여러 개의 script는 하나의 전역 객체를 공유한다
//     6) 예시
//         - 빌트인 전역 프로퍼티(전역 객체의 프로퍼티) : Infinity, NaN, undefined
//         - 빌트인 전역 함수(마찬가지) : eval, isFinite, isNaN, parseFloat, parseInt, encodeURI/decodeURI, encodeURIComponent/decodeURIComponent
//         - 암묵적 전역(위 언급됨) : x=10 -> window.x = 10으로 해석해버림
