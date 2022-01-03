// 클래스 panel들을 모두 선택해 상수 panels에 담기
// querySelectorAll: 여러 개의 객체를 배열로 저장
const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  // 람다식, 익명함수 사용
  panel.addEventListener('click', () => {
    removeActive();
    panel.classList.add('active'); // 패널에 active클래스를 추가
  });
});

// 모든 패널에 active클래스 제거
function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
