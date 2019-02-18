AOS.init();
// menu 

const menuBar = document.querySelector('.header__menu');
const nav = document.querySelector('.main-nav');
const closeNav = document.querySelector('.main-nav__close');

const toggleNav = (e) => {
    e.preventDefault();
    nav.classList.toggle('open');
}
menuBar.addEventListener('click', toggleNav);
closeNav.addEventListener('click', toggleNav)




// navigation colors

const navContainer = document.querySelector('.main-nav');
const navItem = document.querySelectorAll('ul.main-nav__links li');

const getColor = (e) => {
    navContainer.style.backgroundColor = e.target.dataset.color;
}
const defaultColor = () => {
    navContainer.style.backgroundColor = '#660df9';
}
navItem.forEach(item => {
    item.addEventListener('mouseover', getColor);
    item.addEventListener('mouseout', defaultColor);
})


// navigation moving elements
const navDecorTop = document.getElementById('nav-decor');
const navDecorBottom = document.getElementById('nav-decor--bottom');


const changePosTop = (e) => {
    let posX = ((window.innerWidth / 2) - e.clientX) * 0.04;
    let posY = ((window.innerHeight / 2) - e.clientY) * 0.02;
    let posXReverse = (e.clientX - (window.innerWidth / 2)) * 0.04;
    let posYReverse = (e.clientY - (window.innerHeight / 2)) * 0.02;
    navDecorTop.style.transform = `translate(${posX}px, ${posY}px)`

    navDecorBottom.style.transform = `translate(${posXReverse}px, ${posYReverse}px)`

}
// const changePosBottom = (e) => {
//     let posX = ((window.innerWidth / 2) - e.clientX) * 0.04;
//     let posY = ((window.innerHeight / 2) - e.clientY) * 0.02;


// }

navContainer.addEventListener('mousemove', changePosTop);
// window.addEventListener('mousemove', changePosBottom);

// hidden navbar on scroll



var lastKnownScrollY = 0;
var currentScrollY = 0;
var ticking = false;
var idOfHeader = 'site-header';
var eleHeader = null;
const classes = {
    pinned: 'header-pin',
    unpinned: 'header-unpin',
};
function onScroll() {
    currentScrollY = window.pageYOffset;
    if (currentScrollY < lastKnownScrollY) {
        pin();
    } else if (currentScrollY > lastKnownScrollY) {
        unpin();
    }
    lastKnownScrollY = currentScrollY;
}
function pin() {
    if (eleHeader.classList.contains(classes.unpinned)) {
        eleHeader.classList.remove(classes.unpinned);
        eleHeader.classList.add(classes.pinned);
    }
}
function unpin() {
    if (eleHeader.classList.contains(classes.pinned) || !eleHeader.classList.contains(classes.unpinned)) {
        eleHeader.classList.remove(classes.pinned);
        eleHeader.classList.add(classes.unpinned);
    }
}
window.onload = function () {
    eleHeader = document.getElementById(idOfHeader);
    document.addEventListener('scroll', onScroll, false);
}

// swiper design
var menu = ['01', '02', '03']
var mySwiper = new Swiper('.swiper-container', {
    // If we need pagination
    autoHeight: true, //enable auto height
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev',
    },
})
// init skrollr
let s = skrollr.init({ forceHeight: false });
if (s.isMobile()) {
    s.destroy();
}
