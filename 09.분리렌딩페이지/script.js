// 왼쪽 , 오른쪽 , 컨테이너 상수 선언하기
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

// mouseenter : 커서가 영역 안으로 들어오는 이벤트
// mouseleave : 커서가 영역 밖으로 나가는 이벤트
//왼쪽에 마우스엔터 이벤트 발생시 컨테이너에 hover-left 클래스 추가, 마우스리브시 클래스 제거
left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
left.addEventListener('mouseleave', () =>
  container.classList.remove('hover-left')
);
//오른쪽에 마우스엔터 이벤트 발생시 컨테이너에 hover-right 클래스 추가, 마우스리브시 클래스 제거
right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);
right.addEventListener('mouseleave', () =>
  container.classList.remove('hover-right')
);
