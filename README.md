#📚 개념 정리

✨ new Function : 문자를 코드로!
```jsx
const calc = new Function('a', 'b', 'return a + b');
```
- 함수를 동적으로 생성
- 첫 번째~n-1번째 인자는 매개변수 이름
- 마지막 인자는 함수 본문
- eval()과 비슷하지만 함수 스코프 안에서만 실행 → 더 안전
- 계산기, DSL, 동적 코드 실행 등에 사용

🏗️ createElement : HTML 태그를 JS로 만들기
```jsx
const p = document.createElement('p');
p.textContent = '안녕 진혁!';
```
- document.createElement('태그명') 형식
- 생성만 하고 화면엔 안 보임 → 변수에 저장 필요

📎 appendChild : 만든 태그를 화면에 붙이기
```jsx
document.body.appendChild(p);
```
- createElement()로 만든 태그를 DOM에 추가
- 부모.appendChild(자식) 형식
- 실제로 화면에 보이게 만드는 단계
- appendChild()는 노드만 추가 가능

  🧵 append() : 노드 + 문자열도 추가 가능
  ```jsx
  div.append('텍스트', childNode);
  ```
- 문자열도 추가 가능
- 여러 요소 한 번에 추가 가능
- 파이썬의 append()는 리스트 함수지만,
JS에서는 DOM 조작 메서드임

🧬 data-exp : HTML의 커스텀 데이터 속성
```jsx
<div data-exp="2025-09-01">진혁의 경험치</div>

const div = document.querySelector('div');
console.log(div.dataset.exp); // "2025-09-01"
```
- data-exp는 "exp"라는 이름의 사용자 정의 데이터 속성
- 값은 문자열 "2025-09-01"
- 브라우저엔 안 보이지만 JS로 꺼낼 수 있음
- div는 DOM 요소 객체
- dataset은 객체이자 div의 프로퍼티
- exp는 dataset의 프로퍼티 → 닷으로 접근 가능

🧠 DOM 요소 객체란?
자바스크립트가 HTML 태그 하나하나를 객체로 인식한 것

- HTML 태그 → DOM 노드 → JS 객체
- 속성 접근, 스타일 변경, 이벤트 연결 등 가능
