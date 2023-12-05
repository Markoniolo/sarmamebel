const capSlider = document.querySelector('[data-element="cap-slider"]')

if (capSlider) capSliderInit()

function capSliderInit () {
    const pagination = capSlider.querySelector('.swiper-pagination')

    const swiper = new Swiper(capSlider, {
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.cap__nav_right',
            prevEl: '.cap__nav_left',
        },
        pagination: {
            el: pagination,
        },
    });
}
