// form 태그
const loginForm = document.querySelector('#login-form');

// input 태그
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// string 변수는 대문자로 쓰는게 관습
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`; // id가 greeting인 태그에 내용을 추가
  greeting.classList.remove(HIDDEN_CLASSNAME); // id가 greeting인 클래스에 hidden을 제거해서 보이게 함
}

// localStorage에 아무것도 없을 때
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME); // hidden 클래스를 제거해서 form 태그를 보여줌
  // form 태그에 submit 이벤트가 발생하면
  loginForm.addEventListener('submit', (info) => {
    info.preventDefault(); // submit 이벤트가 실행하는 기본 동작을 생략
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 클래스에 hidden을 추가해서 숨김
    const username = loginInput.value; // input으로 입력한 값을 username 변수에 저장
    localStorage.setItem(USERNAME_KEY, username); // localStorage에 key, value를 저장
    paintGreetings(savedUsername);
  });
} else {
  paintGreetings(savedUsername); // localStorage에 값이 있으면 해당 값을 태그 내용에 추가하고 hidden을 없애서 보이게 함
}

// 정리
// submit은 form 안의 요소에서 엔터를 누르거나 버튼을 클릭할 때 발생한다.
// preventDefault - 어떤 이벤트의 기본 행동이 발생되지 않도록 막는 함수
// 기본 행동 - 어떤 브라우저가 기본적으로 수행하는 동작
// 누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침하도록 되어있다.

// 1. submit event가 발생할 때 JSsms 함수를 호출하고 있다.
// 2. 이 때 event object를 argument로 주고 있다.
// 3. 우리는 기본 동작이 실행되는 것을 막아주고 있다.

// 방금 일어난 event에 대한 정보를 담은 이 object는 함수를 위한 EventListener 함수의 첫 번째 인자로 주어진다.
// EventListener에 있는 함수는 직접 실행하지 않는다. 내가 아니라 브라우저가 실행하는 것이다.
