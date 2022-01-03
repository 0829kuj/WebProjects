// 모든 box클래스 객체를 상수에 저장
const boxes = document.querySelectorAll('.box');

// 윈도창에서 스크롤(이벤트가 일어날 장소를 지정) -> checkBoxes함수 실행
window.addEventListener('scroll', checkBoxes);

// 처음 시작시 한번 실행
checkBoxes();

function checkBoxes() {
  // console.log(window.innerHeight); // 스크롤하면 윈도창의 높이를 출력

  // 화면 아래쪽 4/5쯤의 지점 (box를 보여주거나 사라지는 트리거포인트)
  const triggerBottom = (window.innerHeight / 5) * 4;

  // 모든 각각의 box에게 트리거 높이보다 작으면 보이도록
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top; // box의 상단높이
    // box높이 < 트리거포인트 : box를 다시 원위치로 옮겨 보이도록 (= show클래스 추가)
    if (boxTop < triggerBottom) {
      // box보이게 (show클래스 추가)
      box.classList.add('show');
    } else {
      // box안보이게 (show클래스 삭제)
      box.classList.remove('show');
    }
  });
  // getBoundingClientRect : 화면으로부터 개체의 상단높이를 구함

  // querySelector 는 클래스의 이름임을 알려줘야하므로 '.클래스명' 으로 지칭함
  // 반면 classList는 이미 클래스이름임을 알고있으므로 '클래스명' 으로 바로 지칭하면 됨
}
