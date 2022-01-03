const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// open버튼을 클릭하면 show-nav클래스 추가
open.addEventListener('click', () => {
  container.classList.add('show-nav');
});

// close버튼을 클릭하면 show-nav클래스 삭제
close.addEventListener('click', () => {
  container.classList.remove('show-nav');
});
