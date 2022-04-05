var sliderWrap = document.querySelector('#slider');
var slider= document.querySelector('.slider-list');
var slide = document.querySelectorAll('.slider-content');
var currentIdx = 0;
var slideCount = slide.length;
var prevBtn = document.querySelector('.prevBtn');
var nextBtn = document.querySelector('.nextBtn');
var slideWidth = 100;
var slideHeight = 0;
var autoSlider = undefined;
var pager = document.querySelector('.pager');
var pagerHTML = '';

// slide 높이를 확이하여 부모의 높이 지정
for(var i = 0; i < slideCount; i++){
    if(slideHeight < slide[i].offsetHeight){
        slideHeight = slide[i].offsetHeight;
    }
}

sliderWrap.style.height = slideHeight + 'px';
slider.style.height = slideHeight + 'px';


// // slide 갯수에 따라 ul width 값 구하기
// slider.style.width = slideWidth * slideCount + 'px';

// slide가 있으면 가로로 배열
for(var a = 0; a < slideCount; a++) {
    slide[a].style.left = a * 100 + '%';

    // slide 갯수에 따라 pagerBtn 생성
    pagerHTML += '<span>' + (a+1) + '</span>';
    pager.innerHTML = pagerHTML;
}
var pagerBtn = document.querySelectorAll('.pager span');

// 슬라이드 이동
function moveSlide(num) {
    slider.style.left = -slideWidth * num + '%';
    slider.classList.add('animated');
    currentIdx = num;

    // 클릭된 요소에만 .active 추가
    for(var y = 0; y < pagerBtn.length; y++){
        pagerBtn[y].classList.remove('active');
    }
    pagerBtn[num].classList.add('active');
}

// 처음부터 pagerBtn에 active 해두기
moveSlide(0);

nextBtn.addEventListener('click', ()=>{
    if(currentIdx < slideCount - 1){
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});

prevBtn.addEventListener('click', ()=>{
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 1);
    }
});

// 자동 슬라이드
function startAutoSlider(){
    autoSlider = setInterval(()=>{
        var nextIdx = (currentIdx + 1) % slideCount;
        moveSlide(nextIdx);
    },4000);
}

startAutoSlider();

// 자동 슬라이드 정지
function stopAutoSlide(){
    clearInterval(autoSlider);
}

//마우스 올리면 자동 슬라이드 정지
sliderWrap.addEventListener('mouseenter',()=>{
    stopAutoSlide();
});

//마우스 나가면 자동 슬라이드 시작
sliderWrap.addEventListener('mouseleave',()=>{
    startAutoSlider();
});

// pager로 슬라이드 이동하기
for (var x = 0; x < pagerBtn.length; x++){
    pagerBtn[x].addEventListener('click',(e)=>{
        var pagerNum = e.target.innerText - 1;
        moveSlide(pagerNum);
    });
}