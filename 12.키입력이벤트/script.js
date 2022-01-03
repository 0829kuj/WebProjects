// 입력할 태그 객체
const insert = document.getElementById('insert');

// 현재 화면에서 키입력 이벤트 발생 (매개변수가 e이면 이벤트객체를 매개변수로 받는다는 뜻임)
// 누른 키의 정보(키이름, 키코드, 이벤트코드 등)를 e에 저장
window.addEventListener('keydown', (e) => {
  // 이벤트가 일어났을 경우 e에 이벤트의 정보를 저장함

  // console.log(e.code);
  // console.log(e.key);
  // console.log(e.keyCode);
  insert.innerHTML = `
  <div class="key">
    ${e.key}
    <small>event.key</small>
  </div>
  <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
  </div>
  <div class="key">
    ${e.code}
    <small>event.code</small>
  </div>`;
});

window.addEventListener('click', (e) => {
  // console.log(e);
  console.log(`클릭한 좌표: ( ${e.clientX}px, ${e.clientY}px )`);
});
