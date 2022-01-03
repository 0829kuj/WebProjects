// %표시 글자 , 벡그라운드 객체 상수로 저장
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
// 로딩숫자 초기값 0
let load = 0;

// setInterval(함수, 시간) : 일정 시간마다 함수를 실행시키는 속성(시간은 1/1000초)
let interval = setInterval(blurring, 50); // 0.5초에 한번씩 blurring함수 실행

function blurring() {
  load++;
  // console.log(load); // 확인용
  if (load > 99) {
    // load가 100이상일 경우 clearInterval(인터벌객체이름) 으로 해제
    clearInterval(interval); // 위의 반복interval을 중지함
  }
  loadText.textContent = `${load}`; // 벡틱 문자열(``) 사용 : `${변수명}`, 변수와 문자열을 같이 넣을 수 있음

  // 1. 블러필터 적용 - 처음엔 흐리게(30px) => 선명하게(0px), 0 ~ 100을 0 ~ 30으로 변환해 리턴한다고 생각하면 됨
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
  // blur속성을 적용하려면 blur(10px) 이렇게 숫자와 문자가 모두 들어가야 하므로 벡틱필요
  // 2. 글자를 갈수록 흐리게 - opacity 1 => 0, 0 ~ 100을 0 ~ 1으로 변환해 리턴한다고 생각하면 됨
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // opacity속성은 숫자만 들어가면 되므로 벡틱필요x
}

// 한 레인지(0~100)를 다른 레인지 (1~0) , 블러(30~0) 로 변환하는 함수 공식 => 스택오버플로우 검색
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
