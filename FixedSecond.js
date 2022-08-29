const second = document.querySelector('.second');

// 컨텐츠 영역부터 브라우저 최상단까지의 길이 구하기
const secondBottom = second.getBoundingClientRect().bottom + window.scrollY;

window.addEventListener('scroll', function(){
  if(window.scrollY >= secondBottom){
    second.classList.add('fixed');
  }else{
    second.classList.remove('fixed');
  }
});
