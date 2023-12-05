const cyclopedia = document.querySelector('.cyclopedia')

if (cyclopedia) cyclopediaInit()

function cyclopediaInit () {
    const scrollbar = cyclopedia.querySelector('.swiper-scrollbar')
    const nextEl = cyclopedia.querySelector('.cyclopedia__nav-button_right')
    const prevEl = cyclopedia.querySelector('.cyclopedia__nav-button_left')

    swiper = new Swiper(".cyclopedia__slider", {
        slidesPerView: 'auto',
        scrollbar: {
            el: scrollbar
        },
        navigation: {
            nextEl: nextEl,
            prevEl: prevEl,
        },
    });
}
