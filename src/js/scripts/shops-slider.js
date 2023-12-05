const shopsSlider = document.querySelector('[data-element="shops-slider"]')

if (shopsSlider) shopsSliderInit()

function shopsSliderInit () {
    const swiper = new Swiper(shopsSlider, {
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 5000,
        },
    });
}
