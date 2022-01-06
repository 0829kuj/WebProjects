// 상수 정의
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// 작은 컵 클릭 -> 컵 채우기(full클래스 추가)
smallCups.forEach((cup, idx) => {
  // 작은 컵에 클릭이벤트를 달 때 함수에 idx(인덱스번호)값을 매개변수로 넘김
  // -> 작은컵 클릭 시 그 아래 다른컵들의 인덱스번호도 한번에 바뀌도록 코드작성
  cup.addEventListener('click', () => smallCupFull(idx));
});

// 처음 시작할 때 큰컵채우기 한 번 실행 (물의 총량을 표시하기 위해)
bigCupFull();

// 작은컵 물채우기
function smallCupFull(idx) {
  // console.log(idx); // 인덱스 확인
  // 예외인 경우 1. 마지막 컵을 클릭 시 이미 모두 차 있었을경우
  if (idx === 7 && smallCups[idx].classList.contains('full')) idx--;
  // smaillCups[idx]가 full클래스를 가졌으면 idx값을 --함
  else if (
    smallCups[idx].classList.contains('full') &&
    !smallCups[idx].nextElementSibling.classList.contains('full')
  ) {
    // 예외인 경우 2. 중간컵을 선택했는데 자신을 포함한 앞의 컵이 다 차있을 경우 - 예) 두 개가 차 있을 때 두번째 컵을 선택할 경우
    idx--;
  }

  // 일반적인 경우 - 클릭한 컵 이하로는 모두 full추가 혹은 full제거
  smallCups.forEach((cup, i) => {
    if (i <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });
  bigCupFull(); // 작은 컵을 채울 때 큰 컵도 같이 채우도록
} // 예외인 경우를 먼저 작성 후 일반적인 경우를 작성해줌

// 큰컵 물채우기
function bigCupFull() {
  // full클래스를 가진 작은 컵의 갯수를 저장
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length; // 총 작은 컵의 갯수

  if (fullCups === 0) {
    // 채운 컵이 없을 경우 percentage는 안보이고, 높이는 0
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    // 채운 컵이 있을 경우 percentage는 보이고, 높이는 총 높이 330 * (현재 채운 컵의 수 / 총 컵의 수) 로 지정
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`; // 여기선 innerText, textContent중 뭐든 상관없음
  }

  if (fullCups === totalCups) {
    // 총 8개의 컵이 모두 채워졌을 때 remained(큰 컵의 하얀부분)을 안보이게, 높이 0
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
