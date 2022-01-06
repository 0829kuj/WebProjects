//클래스 faq-toggle 버튼들을 모두 저장
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  //모든 토글에 클릭시 상위객체 (.parentNode) 를 찾아서 active 클래스를 토글
  toggle.addEventListener('click', () => {
    // console.log(e.target.parentNode.parentNode);
    // 매개변수.target : 이벤트가 일어난 객체(태그)
    // .parentNode : 현재 위치의 한 단계 상위태그를 지칭
    // console.log(toggle.parentNode);
    // e.target.parentNode.parentNode.classList.toggle('active');
    toggle.parentNode.classList.toggle('active');
    // toggle: active클래스가 있으면 제거, 없으면 추가
  });
});
