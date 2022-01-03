// input, button, seach객체를 const로 저장
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// 버튼을 클릭하면 search에 active클래스를 toggle(없으면 추가, 있으면 제거하는 것)
btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus(); // 자동으로 input창에 커서를 옮김
});
