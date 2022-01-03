// 객체 상수 만들기
const progress = document.getElementById('progress'); // 막대기바
const prev = document.getElementById('prev'); // 이전 버튼
const next = document.getElementById('next'); // 다음 버튼
// 서클(1 ~ 4)들의 객체를 저장
const circles = document.querySelectorAll('.circle'); // circle클래스 모두 선택해 객체생성

// 단계 표시 변수
let currentActive = 1; // 1에 파란불이 들어온 상태로 시작하므로 초기값이 1임
// 다음 버튼을 클릭했을 때
next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
    // 다음버튼을 눌러도 단계표시변수가 circle객체의 갯수보다 커지는 것을 제한
  }
  barUpdate();
});

// 이전버튼을 클릭했을 때
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
    // 단계표시변수가 1보다 작아지는 것을 제한
  }
  barUpdate();
});

function barUpdate() {
  circles.forEach((circle, idx) => {
    // 1~4 서클중 하나와 그 인덱스번호를 매개변수로
    // console.log(circle, idx);  // 확인용
    if (idx < currentActive) {
      // 인덱스번호가 현재 진행번호보다 작으면 그 번호의 태그에 active클래스 부여
      circle.classList.add('active');
    } else {
      // 인덱스번호가 현재 진행번호보다 작으면 그 번호의 태그에 active클래스 제거
      circle.classList.remove('active');
    }
  });
  // 막대바 업데이트
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // 이전, 다음버튼의 사용제한여부
  if (currentActive === 1) {
    prev.disabled = true; // 현재 상태가 1이면 이전버튼 제한
  } else if (currentActive === circles.length) {
    next.disabled = true; // 상태가 4이면 다음버튼 제한
  } else {
    prev.disabled = false; // 그 외엔 모두 사용가능
    next.disabled = false;
  }
}
