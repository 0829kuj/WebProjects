// 본인 API_key입력 후 인기도순의 영화정보 주소
const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=ef07d0b8ed842abc8baea81fdcab9eb3&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
// 이미지 주소 공통부분
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=ef07d0b8ed842abc8baea81fdcab9eb3&language=ko&query="';

// 필요한 태그객체 생성
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

// 영화정보 가져오기
async function getMovies(url) {
  const res = await fetch(url); // url주소로 요청해서 fetch가 정보를 받아줌. await는 모든 정보를 받을 때 까지 기다려줌.
  const data = await res.json(); // 데이터를 json으로 변환 후 data에 저장. await로 모두 변환할때까지 대기

  console.log(data.results); // 필요한 영화정보만 배열로 출력
  showMovie(data.results);
}

// 영화 검색(이벤트)
form.addEventListener('submit', (e) => {
  e.preventDefault(); // 원래의 폼 submit이벤트는 입력한 데이터를 서버로 보냄. 여기서는 그 이벤트를 제거(안쓸거라서).
  const searchTerm = search.value;
  // console.log(searchTerm);
  if (searchTerm && searchTerm !== '') {
    // searchTerm이 true(입력)이면서 전체공백이 아니면
    getMovies(SEARCH_API + searchTerm);
    search.value = ''; // 검색 결과를 보여준 후 검색창을 초기화
  } else {
    window.location.reload(); // 입력이 잘못되었을 경우 새로고침
  }
});

// 영화보여주기
function showMovie(movies) {
  main.innerHTML = ''; // 처음에 비우기

  movies.forEach((movie) => {
    // movies배열에서 가져올 각 영화의 세부정보중 필요한 정보만 객체생성
    const title = movie.title;
    const poster_path = movie.poster_path;
    const vote_average = movie.vote_average;
    const overview = movie.overview;

    // 여기서 movie클래스 생성
    const movieEl = document.createElement('div'); // div태그생성
    movieEl.classList.add('movie');

    movieEl.innerHTML = `
    <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>상세 보기</h3>
          ${overview}
        </div>
    `;
    main.appendChild(movieEl); // main의 아래에 movieEl을 붙여줌
  });
}

// 점수에 따라 글자색변경
function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else {
    return 'red';
  }
}
