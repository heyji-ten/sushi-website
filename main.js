var mMenu = document.querySelector('.m_menu');
var mMenuIcon = document.querySelector('.m_menuBtn');
var toggleMenu = document.querySelector('.m_menubar');
var open = document.querySelector('.fa-bars');
var close = document.querySelector('.fa-x');

// 모바일일때 햄버거 버튼 클릭시 메뉴가 나오게 함

mMenuIcon.addEventListener('click', ()=>{
    toggleMenu.classList.toggle('active');

    if(open.style.display == 'none') {
        open.style.display = 'block';
        close.style.display = 'none';
    } else {
        open.style.display = 'none';
        close.style.display = 'block';
    }
});