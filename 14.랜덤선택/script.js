// 입력받는 창
const textarea = document.getElementById('textarea');
// tag들을 넣을 div객체
const tagsEl = document.getElementById('tags');

// 처음 시작 시 커서를 입력창에
textarea.focus();

// textarea에 키보드를 쳤을 경우의 이벤트
// keyup: 키를 눌렀다가 뗏을 때
// keydown: 키를 눌렀을 때
// keypress: 키를 눌렀다 뗀 후
textarea.addEventListener('keyup', (e) => {
  // console.log(e.target.value); // 입력한 값
  createTags(e.target.value);

  // 엔터 입력시
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = ''; // textarea를 클리어(공백) 해줌
    }, 10); // 시간 뒤에 함수 한번 실행
    randomSelect(); // 랜덤선택함수
  }
});

function randomSelect() {
  const times = 30; // 시간을 바꿀 수 있도록 변수로 생성
  // 계속 반복하는 함수
  const interval = setInterval(() => {
    // 0.1초마다 실행됨
    const randomTag = randomTagSelect();
    하이라이트(randomTag);
    setTimeout(() => {
      하이라이트제거(randomTag);
    }, 100); // 0.1초 뒤 하이라이트 제거
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      // 마지막으로 선택된 태그를 하이라이트시킨 후 종료
      const randomTag = randomTagSelect();
      하이라이트(randomTag);
    }, 100);
  }, times * 100); // 시간 후 멈춤
}

// 랜덤태그선택
function randomTagSelect() {
  const tags = document.querySelectorAll('.tag'); // tag클래스가 있으면 모두 선택
  return tags[Math.floor(Math.random() * tags.length)]; // 인덱스번호 길이만큼의 숫자 중 하나를 랜덤선택해 리턴
}

function 하이라이트(tag) {
  tag.classList.add('highlight');
}
function 하이라이트제거(tag) {
  tag.classList.remove('highlight');
}

function createTags(input) {
  const tags = input
    .split(',') // ,를 기준으로 글자를 자름
    .filter((tag) => tag.trim() !== '') // 공백만 있는건 리턴하지 않음
    .map((tag) => tag.trim()); // 리턴받은 값 중 공백이 있으면 공백제거후 tags배열의 원소로 리턴

  // console.log(tags); //콤마로 분리된 배열확인
  tagsEl.innerHTML = ''; // 여기에 태그들을 입력 전 내부 태그 모두 삭제
  tags.forEach((tag) => {
    const tagEl = document.createElement('span'); // JS로 span태그 생성
    tagEl.classList.add('tag'); // tag클래스 추가
    tagEl.textContent = tag; // 글자내용을 tag(배열 tags의 원소하나)에 입력
    tagsEl.appendChild(tagEl); // tags에 자식태그로 입력
  });
}
// 콘솔에 테스트 "국, 영, 수".split(',').filter((x)=> x.trim() !== '') : 글을 ,기준으로 자른 뒤 빈 문자열을 확인, 공백이 아닐경우 리턴
// "국, 영, 수".split(',').filter((x)=> x.trim() !== '').map((x) => x.trim()): 위 과정 후 공백을 제거한 후 다시 리턴
