const certificatesSlider = document.querySelector('[data-element="certificates-slider"]')

if (certificatesSlider) certificatesSliderInit()

function certificatesSliderInit () {
    const scrollbar = certificatesSlider.querySelector('.swiper-scrollbar')

    swiper = new Swiper(certificatesSlider, {
        slidesPerView: 'auto',
        scrollbar: {
            el: scrollbar
        },
    });
}
