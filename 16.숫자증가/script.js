// counter 클래스가 있는 모든 객체들을 counters에 저장
const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.textContent = '0'; // 컨텐츠를 0으로 채움
  updateCounter(counter);
});

function updateCounter(counter) {
  const target = +counter.getAttribute('data-target'); // 속성 데이터타겟의 값을 target에 저장. 여기선 12000, 5000, 75000
  // counter.getAttribute('data-target')를 그냥 = 으로 넘기면 문자열이지만 앞에 +를 붙여주면 숫자로 바뀜
  // parseInt(문자열) 로 문자열 -> 숫자열 바꿔도 됨.
  // console.log(target); // 확인용
  const c = +counter.textContent; // 초기값 0

  const increment = target / 200; // target을 200으로 나눈비율을 저장.
  // c가 target값보다 작으면 0.001초마다 increment만큼 증가, 작지 않으면 target값을 counter의 textContent값으로 입력
  if (c < target) {
    counter.textContent = `${Math.ceil(c + increment)}`; // 반올림 제거
    setTimeout(() => {
      // 함수 내에서 같은 함수를 호출
      updateCounter(counter);
    }, 1);
    // setTimeout((updateCounter(counter)), 1); // 이렇게하면 제대로 작동안됨
  } else {
    counter.textContent = target; // target값 입력
  }
}
