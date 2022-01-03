// 배열에 사운드 이름을 하나씩 넣기
const sounds = ['박수', '부우', '승리', '타다', '틀림', '한숨'];

// 각각의 사운드 이름으로 버튼 태그를 생성
sounds.forEach((sound) => {
  const btn = document.createElement('button'); // 버튼태그 생성
  btn.classList.add('btn'); // 클래스btn을 버튼태그에 추가

  btn.textContent = sound; // 사운드 이름을 태그 컨텐츠(내용)으로 저장

  document.getElementById('buttons').appendChild(btn); // 버튼 태그에 자식태그로 btn태그를 붙임

  // 각각 버튼을 클릭하면 이름과 같은 mp3를 실행
  // 클릭 시 모든 버튼에 이벤트리스너 붙이기
  btn.addEventListener('click', () => {
    stopMp3();
    document.getElementById(sound).play();
  });
});

// 모든 오디오들을 선택해 멈추는 함수
function stopMp3() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    // 오디오 중단하는 법
    song.pause(); // 오디오 중단
    song.currentTime = 0; // 플레이바를 처음으로 돌림
  });
}
