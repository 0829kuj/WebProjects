// 상수에 label들을 선언
const labels = document.querySelectorAll('.form-control label');

// innerHTML : 태그를 넣음
// 각각 하나의 라벨의 철자를 하나씩 모두 분리
labels.forEach((label) => {
  label.innerHTML = label.textContent
    .split('') // span태그에 e, m, a, i, l 하나씩 분리해 c에 글자, idx에 인덱스번호가 들어감
    .map((c, idx) => `<span style="transition-delay:${idx * 80}ms">${c}</span>`)
    .join(''); // 각각의 span태그를 모두 합침
});
