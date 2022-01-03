//alert('test');
// 사용할 객체를 상수로
const h3 = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
// id선택시 getElementById 사용, 그 외는 querySelector사용
const body = document.getElementById('gradient');
// const h1 = document.querySelector('h1');
// const button = document.querySelector('button');
// // 버튼에 이벤트리스터 달기
// button.addEventListener('click', set); // 버튼을 클릭하면 set함수 실행

function set() {
  // h1.textContent = 'click!';
  // console.log('click!');
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')';
}

color1.addEventListener('input', set);
color2.addEventListener('input', set);
