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
