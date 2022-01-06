// 아이디 toggle 객체, nav 객체 저장
const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

//토글 X 를 클릭하면 nav 객체에 'active'클래스를 토글
toggle.addEventListener('click', () => nav.classList.toggle('active'));
