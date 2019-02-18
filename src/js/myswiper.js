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