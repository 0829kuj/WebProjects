// 상수 const에 태그 객체를 저장 (class img1을 가져와 저장함)
// img1과 img2객체 생성
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

// 1~6의 랜덤 숫자를 만들어 그 숫자값의 주사위를 출력
// 상수는 const, 변수는 let (js는 타입이 필요없음)
// Math.random()으로 0.1 ~ 0.9사이의 난수생성, Math.floor는 정수 아래의 값을 버리는 것
let n1 = Math.floor(Math.random() * 6) + 1;
let n2 = Math.floor(Math.random() * 6) + 1;

console.log(n1);
console.log(n2);

img1.setAttribute('src', 'images/dice' + n1 + '.png');
img2.setAttribute('src', 'images/dice' + n2 + '.png');

if (n1 > n2) {
  h1.textContent = '🚩Player 1 Wins!';
} else if (n1 < n2) {
  h1.textContent = 'Player 2 Wins!🚩';
} else {
  h1.textContent = 'Draw!';
}
// 객체 내의 속성지정은 모두 ''로 감싸 문자열로 작성해야 한다
// textContent : 텍스트를 변경하는 태그
// document.querySelector : document내의 querySelector함수는 쿼리(id, class, 태그 등)를 선택하는 함수
// setAttribute : 선택된 객체의 속성값을 변경하는 태그
